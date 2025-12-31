// import React, { useMemo, useEffect, useState } from "react";
// import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
// import { useSearchParams } from "react-router-dom";
// import { PROPERTIES } from "../Data/Properties";
// import { MapPin, Building2, Search, Navigation2, Filter } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import "leaflet/dist/leaflet.css";

// const INDIA_CENTER = [22.5937, 78.9629];
// const INDIA_ZOOM = 5;

// /* ===== MAP CONTROLLER ===== */
// const MapController = ({ properties, location }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!location || properties.length === 0) {
//       map.flyTo(INDIA_CENTER, INDIA_ZOOM, { duration: 1.5 });
//       return;
//     }
//     if (properties.length === 1) {
//       map.flyTo([properties[0].lat, properties[0].lng], 14, { duration: 1.5 });
//       return;
//     }
//     const bounds = properties.map((p) => [p.lat, p.lng]);
//     map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
//   }, [properties, location, map]);

//   return null;
// };

// export default function PropertyListing() {
//   const [params, setParams] = useSearchParams();
//   const [hoveredProperty, setHoveredProperty] = useState(null);
//   const type = params.get("type");
//   const location = params.get("location");

//   const filteredProperties = useMemo(() =>
//     PROPERTIES.filter((p) => {
//       const typeMatch = type && type !== "all" ? p.type === type : true;
//       const locationMatch = location
//         ? `${p.city} ${p.state} ${p.locality}`.toLowerCase().includes(location.toLowerCase())
//         : true;
//       return typeMatch && locationMatch;
//     }), [type, location]
//   );

//   return (
//     <div className="bg-[#f8fafc] font-sans text-slate-900 h-screen flex flex-col overflow-hidden">
      
//       {/* ===== TOP NAVIGATION ===== */}
//       <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 z-10 shadow-sm sticky top-0">
//         <div className="text-xl font-bold text-slate-900">RealEstateX</div>

//         {/* SEARCH BAR */}
//         <div className="flex-1 max-w-md relative group">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
//           <input
//             type="text"
//             placeholder="Search city, neighborhood, or state..."
//             className="w-full bg-slate-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-400 transition-all outline-none"
//             value={location || ""}
//             onChange={(e) => setParams({ type: type || "all", location: e.target.value })}
//           />
//         </div>

//         <div className="hidden lg:flex items-center gap-2">
//           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
//             <Filter size={16} /> Filters
//           </button>
//         </div>
//       </header>

//       {/* ===== MAIN CONTENT ===== */}
//       <main className="flex-1 flex overflow-hidden">
        
//         {/* LEFT: PROPERTY LISTINGS */}
//         <div className="w-full md:w-[450px] lg:w-[500px] bg-white border-r border-slate-200 flex flex-col h-full shadow-xl">
//           <div className="p-5 border-b border-slate-100 flex justify-between items-end bg-white/80 backdrop-blur-md sticky top-0 z-10">
//             <div>
//               <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Results Found</p>
//               <h2 className="text-2xl font-bold text-slate-900">{filteredProperties.length} Properties</h2>
//             </div>
//             <div className="text-xs font-medium text-slate-400 pb-1">
//               Sort by: <span className="text-slate-900 cursor-pointer">Featured ▾</span>
//             </div>
//           </div>

//           <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-slate-50/50">
//             <AnimatePresence mode="popLayout">
//               {filteredProperties.length === 0 ? (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
//                   <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
//                     <Search size={32} />
//                   </div>
//                   <p className="font-medium text-slate-900">No matches found</p>
//                   <p className="text-sm text-slate-500">Try adjusting your search terms</p>
//                 </motion.div>
//               ) : (
//                 filteredProperties.map((p) => (
//                   <motion.div
//                     layout
//                     key={p.id}
//                     onMouseEnter={() => setHoveredProperty(p.id)}
//                     onMouseLeave={() => setHoveredProperty(null)}
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer group ${
//                       hoveredProperty === p.id ? "ring-2 ring-blue-500 border-transparent shadow-2xl translate-x-1" : "border-slate-200 shadow-sm"
//                     }`}
//                   >
//                     <div className="flex h-36">
//                       <div className="w-40 h-full overflow-hidden relative rounded-l-2xl">
//                         <img src={p.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400"} 
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
//                           alt={p.propertyType} 
//                         />
//                         <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight">
//                           {p.type}
//                         </div>
//                       </div>
//                       <div className="flex-1 p-4 flex flex-col justify-between">
//                         <div>
//                           <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{p.propertyType}</h3>
//                           <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
//                             <MapPin size={12} className="text-slate-400" /> {p.locality}, {p.city}
//                           </p>
//                         </div>
//                         <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
//                           <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
//                             <Building2 size={12} /> {p.developer.split(' ')[0]}
//                           </span>
//                           <span className="text-sm font-bold text-slate-900">₹ Price on Req</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* RIGHT: MAP */}
//         <div className="hidden md:block flex-1 relative bg-slate-200">
//           <MapContainer center={INDIA_CENTER} zoom={INDIA_ZOOM} zoomControl={false} className="h-full w-full z-0">
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
//             <MapController properties={filteredProperties} location={location} />

//             {filteredProperties.map((p) => (
//               <CircleMarker
//                 key={p.id}
//                 center={[p.lat, p.lng]}
//                 radius={hoveredProperty === p.id ? 15 : 8}
//                 pathOptions={{
//                   color: hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
//                   fillColor: hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
//                   fillOpacity: 1,
//                   weight: 3,
//                 }}
//               >
//                 <Popup closeButton={false} className="custom-popup">
//                   <div className="p-1 font-sans">
//                     <p className="font-bold text-slate-900 text-sm">{p.propertyType}</p>
//                     <p className="text-[10px] text-slate-500 uppercase font-bold">{p.locality}</p>
//                   </div>
//                 </Popup>
//               </CircleMarker>
//             ))}
//           </MapContainer>

//           {/* Floating Buttons */}
//           <div className="absolute top-6 right-6 flex flex-col gap-2 z-[1000]">
//             <button 
//               onClick={() => setParams({})}
//               className="bg-white p-3 rounded-full shadow-lg hover:bg-slate-50 transition-colors text-slate-700"
//             >
//               <Navigation2 size={20} />
//             </button>
//           </div>

//           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-[1000]">
//             {["Bengaluru", "Mumbai", "Delhi", "Chennai"].map(city => (
//                <button 
//                 key={city}
//                 onClick={() => setParams({location: city})}
//                 className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg hover:bg-slate-800 transition-all border border-slate-700"
//                >
//                  {city}
//                </button>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }






import React, { useMemo, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PROPERTIES } from "../Data/Properties";
import { MapPin, Search, Navigation2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

/* ================= CONSTANTS ================= */
const INDIA_CENTER = [22.5937, 78.9629];
const INDIA_ZOOM = 5;

const PROPERTY_TYPES = [
  "Apartment",
  "Independent House",
  "Villa",
  "Projects",
];

const BHK_BY_PROPERTY = {
  Apartment: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
  "Independent House": ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
  Villa: ["2 BHK", "3 BHK", "4 BHK"],
  Projects: [],
};

const CONSTRUCTION_STATUS = [
  "Under Construction",
  "Ready to Move",
  "New Launch",
];

/* ================= MAP CONTROLLER ================= */
const MapController = ({ properties, location }) => {
  const map = useMap();

  useEffect(() => {
    if (!location || properties.length === 0) {
      map.flyTo(INDIA_CENTER, INDIA_ZOOM, { duration: 1.5 });
      return;
    }

    if (properties.length === 1) {
      map.flyTo([properties[0].lat, properties[0].lng], 14, {
        duration: 1.5,
      });
      return;
    }

    const bounds = properties.map((p) => [p.lat, p.lng]);
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
  }, [properties, location, map]);

  return null;
};

/* ================= MAIN COMPONENT ================= */
export default function PropertyListing() {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const location = params.get("location") || "";
  const query = params.get("q") || "";
  const type = params.get("type") || "";
  const bhk = params.get("bhk") || "";
  const status = params.get("status") || "";
  const minPrice = Number(params.get("minPrice")) || 0;
  const maxPrice = Number(params.get("maxPrice")) || Infinity;

  /* ================= FILTER LOGIC ================= */
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const locationMatch = location
        ? `${p.city} ${p.locality}`.toLowerCase().includes(location.toLowerCase())
        : true;

      const typeMatch = type ? p.propertyType === type : true;

      const bhkMatch = bhk ? p.bhk?.includes(bhk) : true;

      const statusMatch = status ? p.status === status : true;

      /* PRICE PARSER */
      const numericPrice = (() => {
        if (!p.price) return 0;
        const value = p.price.toLowerCase().replace(/₹|,/g, "");

        if (value.includes("month")) return parseInt(value);
        if (value.includes("lakh")) return parseFloat(value) * 100000;
        if (value.includes("cr")) return parseFloat(value) * 10000000;

        return 0;
      })();

      const priceMatch =
        numericPrice >= minPrice && numericPrice <= maxPrice;

      const keywordMatch = query
        ? `${p.owner} ${p.developer} ${p.propertyType}`
            .toLowerCase()
            .includes(query.toLowerCase())
        : true;

      return (
        locationMatch &&
        typeMatch &&
        bhkMatch &&
        statusMatch &&
        priceMatch &&
        keywordMatch
      );
    });
  }, [location, query, type, bhk, status, minPrice, maxPrice]);

  return (
    <div className="h-screen flex flex-col bg-slate-50">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b px-6 py-4 flex gap-4 justify-between items-center sticky top-0 z-20">

        <div className="relative max-w-md w-full">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={location}
            onChange={(e) =>
              setParams({
                location: e.target.value,
                q: query,
                type,
                bhk,
                status,
                minPrice,
                maxPrice,
              })
            }
            placeholder="Search city or locality..."
            className="w-full bg-slate-100 rounded-xl py-2.5 pl-10 pr-4 outline-none"
          />
        </div>

        <div className="hidden lg:flex gap-3">

          <select
            value={type}
            onChange={(e) =>
              setParams({ location, q: query, type: e.target.value, bhk: "", status })
            }
            className="bg-slate-100 px-3 py-2 rounded-lg text-sm"
          >
            <option value="">Property</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            value={bhk}
            disabled={!BHK_BY_PROPERTY[type]?.length}
            onChange={(e) =>
              setParams({ location, q: query, type, bhk: e.target.value, status })
            }
            className="bg-slate-100 px-3 py-2 rounded-lg text-sm"
          >
            <option value="">
              {BHK_BY_PROPERTY[type]?.length ? "BHK" : "N/A"}
            </option>
            {(BHK_BY_PROPERTY[type] || []).map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>

          <select
            onChange={(e) => {
              const [min, max] = e.target.value.split("-");
              setParams({ location, q: query, type, bhk, status, minPrice: min, maxPrice: max });
            }}
            className="bg-slate-100 px-3 py-2 rounded-lg text-sm"
          >
            <option value="">Price</option>
            <option value="0-3000000">Below ₹30L</option>
            <option value="3000000-6000000">₹30L – ₹60L</option>
            <option value="6000000-10000000">₹60L – ₹1Cr</option>
            <option value="10000000-99999999">Above ₹1Cr</option>
          </select>

          <select
            value={status}
            onChange={(e) =>
              setParams({ location, q: query, type, bhk, status: e.target.value })
            }
            className="bg-slate-100 px-3 py-2 rounded-lg text-sm"
          >
            <option value="">Status</option>
            {CONSTRUCTION_STATUS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="flex flex-1 overflow-hidden">

        {/* LIST */}
        <div className="w-full md:w-[460px] bg-white border-r overflow-y-auto p-5 space-y-4">
          <h2 className="text-xl font-bold">{filteredProperties.length} Properties</h2>

          <AnimatePresence>
            {filteredProperties.map((p) => (
              <motion.div
                key={p.id}
                layout
                onClick={() => navigate(`/property/${p.id}`)}
                onMouseEnter={() => setHoveredProperty(p.id)}
                onMouseLeave={() => setHoveredProperty(null)}
                className="bg-white rounded-xl border shadow-sm cursor-pointer hover:ring-2 hover:ring-blue-500"
              >
                <div className="flex h-36">
                 <img
                    src={
                      p.image ||
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    }
                    alt={p.owner}
                    className="w-40 h-full object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h3 className="font-bold">{p.owner}</h3>
                    <p className="text-sm text-slate-600">{p.bhk} • {p.price}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin size={12} />
                      {p.locality}, {p.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MAP */}
        <div className="hidden md:block flex-1 relative">
          <MapContainer center={INDIA_CENTER} zoom={INDIA_ZOOM} className="h-full w-full">
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            <MapController properties={filteredProperties} location={location} />

            {filteredProperties.map((p) => (
              <CircleMarker
                key={p.id}
                center={[p.lat, p.lng]}
                radius={hoveredProperty === p.id ? 14 : 8}
                pathOptions={{ color: "#2563eb", fillOpacity: 1 }}
              >
                <Popup>
                  <strong>{p.owner}</strong>
                  <br />
                  {p.price}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          <button
            onClick={() => setParams({})}
            className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg"
          >
            <Navigation2 size={20} />
          </button>
        </div>
      </main>
    </div>
  );
}


// import React, { useMemo, useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { PROPERTIES } from "../Data/Properties";
// import { MapPin, Search, Navigation2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import "leaflet/dist/leaflet.css";

// /* ================= CONSTANTS ================= */
// const INDIA_CENTER = [22.5937, 78.9629];
// const INDIA_ZOOM = 5;

// const PROPERTY_TYPES = ["Apartment", "Independent House", "Villa", "Projects"];

// const BHK_BY_PROPERTY = {
//   Apartment: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
//   "Independent House": ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
//   Villa: ["2 BHK", "3 BHK", "4 BHK"],
//   Projects: [],
// };

// const CONSTRUCTION_STATUS = [
//   "Under Construction",
//   "Ready to Move",
//   "New Launch",
// ];

// /* ================= MAP CONTROLLER ================= */
// const MapController = ({ properties, location }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!location || properties.length === 0) {
//       map.flyTo(INDIA_CENTER, INDIA_ZOOM, { duration: 1.5 });
//       return;
//     }

//     if (properties.length === 1) {
//       map.flyTo([properties[0].lat, properties[0].lng], 14, {
//         duration: 1.5,
//       });
//       return;
//     }

//     const bounds = properties.map((p) => [p.lat, p.lng]);
//     map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
//   }, [properties, location, map]);

//   return null;
// };

// /* ================= MAIN COMPONENT ================= */
// export default function PropertyListing() {
//   const [params, setParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [hoveredProperty, setHoveredProperty] = useState(null);

//   const location = params.get("location") || "";
//   const query = params.get("q") || "";
//   const type = params.get("type") || "";
//   const bhk = params.get("bhk") || "";
//   const status = params.get("status") || "";
//   const minPrice = Number(params.get("minPrice")) || 0;
//   const maxPrice = Number(params.get("maxPrice")) || Infinity;

//   /* ================= FILTER LOGIC ================= */
//   const filteredProperties = useMemo(() => {
//     return PROPERTIES.filter((p) => {
//       const locationMatch = location
//         ? `${p.city} ${p.locality}`
//             .toLowerCase()
//             .includes(location.toLowerCase())
//         : true;

//       const typeMatch = type ? p.propertyType === type : true;
//       const bhkMatch = bhk ? p.bhk?.includes(bhk) : true;
//       const statusMatch = status ? p.status === status : true;

//       const numericPrice = (() => {
//         if (!p.price) return 0;
//         const value = p.price.toLowerCase().replace(/₹|,/g, "");
//         if (value.includes("month")) return parseInt(value);
//         if (value.includes("lakh")) return parseFloat(value) * 100000;
//         if (value.includes("cr")) return parseFloat(value) * 10000000;
//         return 0;
//       })();

//       const priceMatch =
//         numericPrice >= minPrice && numericPrice <= maxPrice;

//       const keywordMatch = query
//         ? `${p.owner} ${p.developer} ${p.propertyType}`
//             .toLowerCase()
//             .includes(query.toLowerCase())
//         : true;

//       return (
//         locationMatch &&
//         typeMatch &&
//         bhkMatch &&
//         statusMatch &&
//         priceMatch &&
//         keywordMatch
//       );
//     });
//   }, [location, query, type, bhk, status, minPrice, maxPrice]);

//   return (
//     <div className="h-screen flex flex-col bg-slate-50">
//       {/* ================= HEADER ================= */}
//       <header className="bg-white border-b px-6 py-4 flex gap-4 justify-between items-center sticky top-0 z-20">
//         <div className="relative max-w-md w-full">
//           <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//           <input
//             value={location}
//             onChange={(e) =>
//               setParams({ location: e.target.value })
//             }
//             placeholder="Search city or locality..."
//             className="w-full bg-slate-100 rounded-xl py-2.5 pl-10 pr-4 outline-none"
//           />
//         </div>
//       </header>

//       {/* ================= CONTENT ================= */}
//       <main className="flex flex-1 overflow-hidden">
//         {/* LIST */}
//         <div className="w-full md:w-[460px] bg-white border-r overflow-y-auto p-5 space-y-4">
//           <h2 className="text-xl font-bold">
//             {filteredProperties.length} Properties
//           </h2>

//           <AnimatePresence>
//             {filteredProperties.map((p) => (
//               <motion.div
//                 key={p.id}
//                 layout
//                 onClick={() => navigate(`/property/${p.id}`)}
//                 onMouseEnter={() => setHoveredProperty(p.id)}
//                 onMouseLeave={() => setHoveredProperty(null)}
//                 className="bg-white rounded-xl border shadow-sm cursor-pointer hover:ring-2 hover:ring-orange-500"
//               >
//                 <div className="flex h-36">
//                   <img
//                     src={
//                       p.image ||
//                       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                     }
//                     alt={p.owner}
//                     className="w-40 h-full object-cover"
//                   />
//                   <div className="p-4 flex-1">
//                     <h3 className="font-bold">{p.owner}</h3>
//                     <p className="text-sm text-slate-600">
//                       {p.bhk} • {p.price}
//                     </p>
//                     <p className="text-xs text-slate-500 flex items-center gap-1">
//                       <MapPin size={12} />
//                       {p.locality}, {p.city}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* MAP */}
//         <div className="hidden md:block flex-1 relative">
//           <MapContainer
//             center={INDIA_CENTER}
//             zoom={INDIA_ZOOM}
//             className="h-full w-full"
//           >
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
//             <MapController properties={filteredProperties} location={location} />

//             {filteredProperties.map((p) => (
//               <CircleMarker
//                 key={p.id}
//                 center={[p.lat, p.lng]}
//                 radius={hoveredProperty === p.id ? 14 : 8}
//                 pathOptions={{
//                   color:
//                     hoveredProperty === p.id ? "#f97316" : "#2563eb",
//                   fillColor:
//                     hoveredProperty === p.id ? "#f97316" : "#2563eb",
//                   fillOpacity: 1,
//                 }}
//               >
//                 <Popup>
//                   <div className="w-48">
//                     <img
//                       src={
//                         p.image ||
//                         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                       }
//                       alt={p.owner}
//                       className="w-full h-24 object-cover rounded-md mb-2"
//                     />
//                     <h4 className="font-semibold text-sm">{p.owner}</h4>
//                     <p className="text-xs text-slate-600">
//                       {p.bhk} • {p.price}
//                     </p>
//                     <p className="text-xs text-slate-500">
//                       {p.locality}, {p.city}
//                     </p>
//                   </div>
//                 </Popup>
//               </CircleMarker>
//             ))}
//           </MapContainer>

//           <button
//             onClick={() => setParams({})}
//             className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg"
//           >
//             <Navigation2 size={20} />
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }
