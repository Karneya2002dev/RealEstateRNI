// src/components/HeroWithSearch.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "../../assets/bgggg.jpg";
import heroImage2 from "../../assets/2.jpg";
import heroImage3 from "../../assets/1.jpg";

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
  const [location, setLocation] = useState("Bengaluru");
  const [keywords, setKeywords] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    navigate(
      `/properties?location=${location}&q=${keywords}&type=${propertyType}`
    );
  };

  return (
    <div className="mt-8 w-full max-w-4xl mx-auto px-4">
      {/* Change: 
         - Mobile: rounded-2xl (card style)
         - Desktop: md:rounded-full (pill style)
      */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full shadow-2xl p-2 md:p-3 gap-2">

        {/* Location Dropdown */}
        <div className="flex items-center gap-2 px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r w-full md:w-auto">
          <MapPin className="text-red-500 shrink-0" size={18} />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none bg-transparent text-gray-700 font-semibold w-full cursor-pointer"
          >
            {["Bengaluru", ...TAMIL_NADU_LOCATIONS].map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Keywords Input */}
        <div className="w-full flex-1 px-2">
          <input
            type="text"
            placeholder="Keywords for search"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full px-4 py-3 md:py-2 outline-none text-gray-700 bg-transparent border-b md:border-none"
          />
        </div>

        {/* Property Type Dropdown */}
        <div className="flex items-center w-full md:w-auto px-4 py-3 md:py-0 border-b md:border-b-0 md:border-l">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="outline-none bg-transparent text-gray-700 font-semibold w-full cursor-pointer"
          >
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Commercial</option>
          </select>
        </div>

        {/* Buttons Group */}
        <div className="flex items-center w-full md:w-auto gap-4 px-4 py-2 md:p-0">
          <button
            onClick={() => {
              setKeywords("");
              setPropertyType("");
            }}
            className="text-gray-400 hover:text-red-500 font-bold text-sm uppercase tracking-wider md:px-2"
          >
            Clear
          </button>

          <button
            onClick={handleSearch}
            className="bg-red-500 hover:bg-red-600 text-white p-4 md:p-3 rounded-xl md:rounded-full transition flex-1 md:flex-none flex justify-center items-center shadow-lg shadow-red-200 md:shadow-none"
          >
            <Search size={20} />
            <span className="md:hidden ml-2 font-bold uppercase">Search</span>
          </button>
        </div>
      </div>
    </div>
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
      {/* Background Images */}
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

      {/* Hero Content */}
      <div ref={ref} className="relative z-10 text-center px-4 md:px-0 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Real Estate Network India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white"
        >
          Your Trusted Partner in Real Estate
        </motion.p>

        <SearchFilterBar />
      </div>
    </section>
  );
};

export default Hero;
