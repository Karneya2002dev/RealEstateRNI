// src/components/HeroWithSearch.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, MapPin } from "lucide-react";
import heroImage1 from "../../assets/bgggg.jpg";
import heroImage2 from "../../assets/2.jpg";
import heroImage3 from "../../assets/1.jpg";

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper: Debounce hook
 */
function useDebounce(value, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/**
 * Client-side "scraper" attempt:
 * - tries to fetch provided page (may fail due to CORS)
 * - if HTML returned, uses DOMParser and heuristics to find location-like text
 *
 * Returns an array of suggestion strings.
 */
async function fetchLocationsFromPage(url, query = "") {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "text/html",
        "User-Agent": "Mozilla/5.0",
      },
      // don't send credentials
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const candidates = new Set();

    // 1) meta tags common
    const metas = doc.querySelectorAll('meta[name], meta[property], meta[itemprop]');
    metas.forEach((m) => {
      const name = m.getAttribute("name") || m.getAttribute("property") || m.getAttribute("itemprop");
      const content = m.getAttribute("content");
      if (!content) return;
      const lower = name?.toLowerCase();
      if (lower?.includes("location") || lower?.includes("address") || lower?.includes("place") || lower?.includes("local")) {
        candidates.add(content.trim());
      }
    });

    // 2) elements with common classes/ids
    const selectors = [
      "[data-location]",
      ".location",
      ".place",
      ".address",
      "#location",
      "#address",
      '[itemprop="address"]',
      '[class*="loc"]',
      '[class*="address"]',
      '.project-location',
      '.project-address'
    ];
    selectors.forEach((sel) => {
      doc.querySelectorAll(sel).forEach((el) => {
        const txt = el.textContent?.trim();
        if (txt && txt.length < 200) candidates.add(txt);
      });
    });

    // 3) Look for map iframe or data attributes with lat/lon
    doc.querySelectorAll("iframe").forEach((ifr) => {
      const src = ifr.getAttribute("src") || "";
      if (src.includes("google.com/maps") || src.includes("openstreetmap.org")) {
        candidates.add("Map embed — check iframe src");
      }
    });
    doc.querySelectorAll("[data-lat],[data-lon],[data-latitude],[data-longitude]").forEach((el) => {
      const lat = el.getAttribute("data-lat") || el.getAttribute("data-latitude");
      const lon = el.getAttribute("data-lon") || el.getAttribute("data-longitude");
      if (lat && lon) candidates.add(`Coordinates: ${lat}, ${lon}`);
    });

    // 4) fallback: search visible text for occurrences that look like place names (simple heuristic)
    const bodyText = doc.body?.textContent || "";
    // find lines with "Chennai", "Bangalore" etc. (we look for capitalized words followed by known tokens)
    const placeRegex = /([A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,2})(?:\s[-,–\|]\s)?(Guduvanchery|Chennai|Tambaram|Coimbatore|Bangalore|Bengaluru|Mumbai|Delhi)?/g;
    let m;
    while ((m = placeRegex.exec(bodyText)) !== null) {
      const candidate = m[0].trim();
      if (candidate.length && candidate.length < 120) candidates.add(candidate);
    }

    // 5) filter by query if present
    const all = Array.from(candidates).map(s => s.replace(/\s{2,}/g, " ").trim()).filter(Boolean);
    if (!query) return all;
    const q = query.toLowerCase();
    return all.filter(s => s.toLowerCase().includes(q));
  } catch (err) {
    // propagate the error so caller knows to fallback to server proxy
    throw err;
  }
}

/**
 * SearchFilterBar: Autocomplete that tries client-side fetch first,
 * then falls back to calling a proxy endpoint (see Node example below).
 *
 * Props:
 * - sourceUrl: the page URL we will attempt to read (defaults to the URL you gave)
 * - proxyApi: optional backend proxy endpoint (e.g. /api/scrape?url=...) -- recommended if CORS blocks
 */
const SearchFilterBar = ({ sourceUrl = "https://realestatesnetworkindiapvtltd.com/projects/plot-availability/6?embed=1", proxyApi = "/api/scrape" }) => {
  const [propertyType, setPropertyType] = useState("Buy");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 350);
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  // search function: first try client-side page parse; if CORS or other error, call proxy
  const performSearch = useCallback(async (q) => {
    if (!q || q.trim().length < 1) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    // attempt client-side fetch & parse
    try {
      const results = await fetchLocationsFromPage(sourceUrl, q);
      if (results && results.length) {
        setSuggestions(results);
        setOpen(true);
      } else {
        // no results found on page; fallback to proxy call
        const proxyRes = await fetch(`${proxyApi}?url=${encodeURIComponent(sourceUrl)}&q=${encodeURIComponent(q)}`);
        if (proxyRes.ok) {
          const json = await proxyRes.json();
          setSuggestions(json.suggestions || []);
          setOpen((json.suggestions || []).length > 0);
        } else {
          setSuggestions([]);
          setOpen(false);
        }
      }
    } catch (err) {
      // likely CORS or network failure -> fallback to proxy
      try {
        const proxyRes = await fetch(`${proxyApi}?url=${encodeURIComponent(sourceUrl)}&q=${encodeURIComponent(q)}`);
        if (proxyRes.ok) {
          const json = await proxyRes.json();
          setSuggestions(json.suggestions || []);
          setOpen((json.suggestions || []).length > 0);
        } else {
          setSuggestions([]);
          setOpen(false);
        }
      } catch (err2) {
        // both failed
        setSuggestions([]);
        setOpen(false);
      }
    } finally {
      setLoading(false);
    }
  }, [sourceUrl, proxyApi]);

  useEffect(() => {
    performSearch(debouncedQuery);
  }, [debouncedQuery, performSearch]);

  const onSelect = (value) => {
    setQuery(value);
    setOpen(false);
    inputRef.current?.focus();
  };

  // keyboard handlers
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "ArrowDown") {
        setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
      } else if (e.key === "ArrowUp") {
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (activeIndex >= 0 && activeIndex < suggestions.length) {
          onSelect(suggestions[activeIndex]);
        } else {
          setOpen(false);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, suggestions, activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 w-full max-w-4xl p-2 md:p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100"
    >
      {/* Segmented Control */}
      <div className="flex justify-center mb-4 p-1 bg-gray-100 rounded-xl">
        {["Buy", "Rent", "Sell"].map((type) => (
          <button
            key={type}
            onClick={() => setPropertyType(type)}
            className={`flex-1 py-2 px-4 text-sm font-semibold rounded-lg transition-all duration-300
              ${propertyType === type ? "bg-amber-600 text-white shadow-md" : "text-gray-600 hover:text-amber-600"}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative flex items-center space-x-3">
        <div className="flex items-center flex-1 bg-white p-3 rounded-xl border border-gray-200 shadow-inner">
          <MapPin size={20} className="text-amber-600 mr-2" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(-1); }}
            type="text"
            placeholder="Enter location, city, or property type..."
            className="w-full text-gray-800 placeholder-gray-500 focus:outline-none text-base"
            onFocus={() => { if (suggestions.length) setOpen(true); }}
          />
        </div>

        <button
          onClick={() => { /* perform a final search or navigate */ }}
          className="flex items-center justify-center p-4 bg-amber-600 text-white rounded-xl shadow-lg hover:bg-amber-700 transition duration-300"
        >
          <Search size={22} className="mr-0 md:mr-2" />
          <span className="hidden md:inline font-bold">Search</span>
        </button>

        {/* Suggestions dropdown */}
        <div className="absolute left-0 right-0 top-full mt-2 max-w-4xl mx-auto z-50">
          <div className="relative">
            <motion.ul
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : -6 }}
              transition={{ duration: 0.18 }}
              className={`bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ${open ? "" : "pointer-events-none"} `}
              style={{ display: open ? "block" : "none" }}
            >
              {loading && (
                <li className="px-4 py-3 text-sm text-gray-500">Loading...</li>
              )}
              {!loading && suggestions.length === 0 && (
                <li className="px-4 py-3 text-sm text-gray-500">No suggestions</li>
              )}
              {!loading && suggestions.map((s, idx) => (
                <li
                  key={s + idx}
                  onMouseDown={(ev) => { ev.preventDefault(); onSelect(s); }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`px-4 py-2 cursor-pointer text-sm ${activeIndex === idx ? "bg-amber-50" : "hover:bg-gray-50"}`}
                >
                  {s}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3">
        Searching for property type: <strong>{propertyType}</strong>
      </p>
    </motion.div>
  );
};

// --- Hero Component (unchanged styling + slider) ---
const Hero = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  const backgroundImages = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const bgVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 1, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            variants={bgVariants}
            initial="enter"
            animate={currentIndex === index ? "center" : "exit"}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="relative z-10 text-center flex flex-col items-center container mx-auto px-6 py-20">
        <motion.h1 variants={textVariants} initial="hidden" animate={controls} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl mb-4">
          Real Estate Network India
        </motion.h1>

        <motion.p variants={textVariants} initial="hidden" animate={controls} transition={{ delay: 0.3 }} className="text-lg sm:text-xl md:text-2xl text-gray-200">
          Your Trusted Partner in Real Estate Solutions
        </motion.p>

        <motion.p variants={textVariants} initial="hidden" animate={controls} transition={{ delay: 0.6 }} className="text-base sm:text-lg md:text-xl text-gray-200 mt-4">
          Powered by <span className="text-teal-300 font-semibold">Manage My Estate — RNI</span>
        </motion.p>

        {/* Pass the sourceUrl and proxyApi if you want to override the defaults */}
        <SearchFilterBar />
      </div>
    </section>
  );
};

export default Hero;
