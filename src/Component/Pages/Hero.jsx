// src/components/HeroWithSearch.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "../../assets/bgggg.jpg";
import heroImage2 from "../../assets/2.jpg";
import heroImage3 from "../../assets/1.jpg";

/* ===============================
   Tamil Nadu Locations
================================ */
const TAMIL_NADU_LOCATIONS = [
  "Chennai","Coimbatore","Madurai","Trichy","Salem","Erode",
  "Tiruppur","Vellore","Thoothukudi","Tirunelveli","Kanchipuram",
  "Chengalpattu","Thanjavur","Dindigul","Karur","Namakkal",
  "Cuddalore","Villupuram","Krishnagiri","Dharmapuri",
];

/* ===============================
   Search Filter Bar
================================ */
const SearchFilterBar = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("Buy");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredLocations = TAMIL_NADU_LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (!query) return;
    navigate(`/properties?type=${propertyType.toLowerCase()}&location=${query}`);
  };

  /* Keyboard support */
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowDown")
        setActiveIndex((i) => Math.min(i + 1, filteredLocations.length - 1));
      else if (e.key === "ArrowUp")
        setActiveIndex((i) => Math.max(i - 1, 0));
      else if (e.key === "Enter")
        activeIndex >= 0 ? setQuery(filteredLocations[activeIndex]) : handleSearch();
      else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, activeIndex, filteredLocations]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 w-full max-w-4xl p-4 bg-white/95 rounded-2xl shadow-2xl"
    >
      {/* Buy / Rent / Sell */}
      <div className="flex mb-4 bg-gray-100 p-1 rounded-xl">
        {["Buy", "Rent", "Sell"].map((type) => (
          <button
            key={type}
            onClick={() => setPropertyType(type)}
            className={`flex-1 py-2 font-semibold rounded-lg transition-all duration-300
              ${
                propertyType === type
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-amber-100 hover:text-amber-700"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative flex items-center gap-3">
        <div className="flex flex-1 items-center border rounded-xl px-4 py-3
                        focus-within:ring-2 focus-within:ring-amber-500 transition">
          <MapPin className="text-amber-600 mr-2" size={20} />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActiveIndex(-1);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search Tamil Nadu location"
            className="w-full outline-none text-gray-800"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-amber-600 hover:bg-amber-700 hover:scale-105
                     transition-all duration-300 text-white px-6 py-3
                     rounded-xl font-bold flex items-center gap-2"
        >
          <Search size={20} /> Search
        </button>

        {/* Suggestions */}
        {open && query && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
            {filteredLocations.length ? (
              filteredLocations.map((loc, idx) => (
                <div
                  key={loc}
                  onMouseDown={() => {
                    setQuery(loc);
                    setOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`px-4 py-3 cursor-pointer flex items-center gap-2 transition-all
                    ${
                      activeIndex === idx
                        ? "bg-amber-100 border-l-4 border-amber-600"
                        : "hover:bg-amber-50"
                    }`}
                >
                  <MapPin size={16} className="text-amber-600" />
                  {loc}
                </div>
              ))
            ) : (
              <p className="px-4 py-3 text-gray-500">No locations found</p>
            )}
          </div>
        )}
      </div>

      <p className="text-xs text-center text-gray-500 mt-3">
        Searching for <strong>{propertyType}</strong> properties in Tamil Nadu
      </p>
    </motion.div>
  );
};

/* ===============================
   Hero Section
================================ */
const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  const images = [heroImage1, heroImage2, heroImage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {images.map((img, i) => (
        <motion.div
          key={i}
          animate={{ opacity: current === i ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      <div ref={ref} className="relative z-10 text-center text-black px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Real Estate Network India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl"
        >
          Your Trusted Partner in Real Estate
        </motion.p>

        <SearchFilterBar />
      </div>
    </section>
  );
};

export default Hero;
