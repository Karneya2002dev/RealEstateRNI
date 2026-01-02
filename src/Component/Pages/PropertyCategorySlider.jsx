// import React, { useMemo, useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import { useSearchParams } from "react-router-dom";
// import { MapPin, Building2, Search, Navigation2, Filter } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import "leaflet/dist/leaflet.css";

// const CHENNAI_CENTER = [13.0827, 80.2707];
// const CHENNAI_ZOOM = 12;

// const MapController = ({ properties }) => {
//   const map = useMap();

//   useEffect(() => {
//     const validProperties = properties.filter(
//       (p) => Number.isFinite(p.lat) && Number.isFinite(p.lng)
//     );

//     if (!validProperties.length) {
//       map.flyTo(CHENNAI_CENTER, CHENNAI_ZOOM, { duration: 1.5 });
//       return;
//     }

//     if (validProperties.length === 1) {
//       map.flyTo([validProperties[0].lat, validProperties[0].lng], 14, {
//         duration: 1.5,
//       });
//       return;
//     }

//     const bounds = validProperties.map((p) => [p.lat, p.lng]);
//     map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
//   }, [properties, map]);

//   return null;
// };

// export default function PropertyListing() {
//   const [params, setParams] = useSearchParams();
//   const [hoveredProperty, setHoveredProperty] = useState(null);
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const location = params.get("location") || "";
//   const type = params.get("type") || "";
//   const query = params.get("q") || "";

//   useEffect(() => {
//     fetch("http://localhost:5000/api/properties")
//       .then((res) => res.json())
//       .then((data) => {
//         const list = data.data || data;
//         const normalized = list
//           .map((p) => {
//             const lat = Number(p.lat ?? p.latitude);
//             const lng = Number(p.lng ?? p.longitude);
//             if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

//             return {
//               id: p.id,
//               propertyType:
//                 typeof p.propertyType === "object"
//                   ? p.propertyType.name
//                   : p.propertyType || p.name || "Property",
//               city: typeof p.city === "object" ? p.city.name : p.city || "",
//               state: typeof p.state === "object" ? p.state.name : p.state || "",
//               locality:
//                 typeof p.locality === "object"
//                   ? p.locality.name
//                   : p.locality || "",
//               developer:
//                 typeof p.developer === "object"
//                   ? p.developer.name
//                   : p.developer || "Developer",
//               lat,
//               lng,
//               image: p.image || p.cover_image || "",
//             };
//           })
//           .filter(Boolean);

//         setProperties(normalized);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to load properties", err);
//         setLoading(false);
//       });
//   }, []);

//   const filteredProperties = useMemo(() => {
//     return properties.filter((p) => {
//       const locationMatch = location
//         ? `${p.city} ${p.state} ${p.locality}`
//             .toLowerCase()
//             .includes(location.toLowerCase())
//         : true;
//       const typeMatch = type
//         ? p.propertyType.toLowerCase() === type.toLowerCase()
//         : true;
//       const keywordMatch = query
//         ? `${p.propertyType} ${p.developer}`
//             .toLowerCase()
//             .includes(query.toLowerCase())
//         : true;

//       return locationMatch && typeMatch && keywordMatch;
//     });
//   }, [properties, location, type, query]);

//   return (
//     <div className="h-screen flex flex-col bg-gray-50 text-gray-900">
//       {/* HEADER */}
//       <header className="bg-white border-b px-6 py-4 flex flex-col md:flex-row gap-4 items-center sticky top-0 z-20 shadow-sm">
//         <h1 className="text-xl font-bold">RealEstateX</h1>

//         <div className="relative flex-1 max-w-md w-full">
//           <Search
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//           />
//           <input
//             value={location}
//             onChange={(e) =>
//               setParams({ location: e.target.value, q: query, type })
//             }
//             placeholder="Search city or locality..."
//             className="w-full bg-gray-100 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-400 transition"
//           />
//         </div>

//         <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
//           <Filter size={16} /> Filters
//         </button>
//       </header>

//       {/* CONTENT */}
//       <main className="flex flex-1 overflow-hidden">
//         {/* LIST */}
//         <div className="w-full md:w-[460px] bg-white border-r flex flex-col">
//           <div className="p-5 border-b bg-white">
//             <p className="text-xs uppercase tracking-wider text-gray-400">
//               Results Found
//             </p>
//             <h2 className="text-2xl font-bold">
//               {loading ? "Loading..." : `${filteredProperties.length} Properties`}
//             </h2>
//           </div>

//           <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
//             <AnimatePresence>
//               {loading ? (
//                 <p className="text-center py-20">Loading properties...</p>
//               ) : filteredProperties.length === 0 ? (
//                 <motion.div className="text-center py-20">
//                   <Search size={40} className="mx-auto text-gray-400 mb-4" />
//                   <p className="font-medium">No properties found</p>
//                 </motion.div>
//               ) : (
//                 filteredProperties.map((p) => (
//                   <motion.div
//                     key={p.id}
//                     layout
//                     onMouseEnter={() => setHoveredProperty(p.id)}
//                     onMouseLeave={() => setHoveredProperty(null)}
//                     className={`bg-white rounded-2xl border overflow-hidden transition shadow hover:shadow-lg hover:ring-2 hover:ring-blue-500`}
//                   >
//                     <div className="flex flex-col md:flex-row h-44 md:h-36">
//                       <img
//                         src={
//                           p.image ||
//                           "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//                         }
//                         className="w-full md:w-40 h-44 md:h-full object-cover"
//                         alt={p.propertyType}
//                       />
//                       <div className="flex-1 p-4 flex flex-col justify-between">
//                         <div>
//                           <h3 className="font-bold text-lg">{p.propertyType}</h3>
//                           <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
//                             <MapPin size={12} />
//                             {p.locality}, {p.city}
//                           </p>
//                         </div>

//                         <div className="flex justify-between items-center pt-2 border-t text-xs">
//                           <span className="flex items-center gap-1">
//                             <Building2 size={12} />
//                             {p.developer}
//                           </span>
//                           <span className="font-bold">₹ Price on Req</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* MAP */}
//         <div className="hidden md:block flex-1 relative">
//           <MapContainer
//             center={CHENNAI_CENTER}
//             zoom={CHENNAI_ZOOM}
//             zoomControl={false}
//             className="h-full w-full"
//           >
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
//             <MapController properties={filteredProperties} />

//             {filteredProperties
//               .filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng))
//               .map((p) => (
//                 <CircleMarker
//                   key={p.id}
//                   center={[p.lat, p.lng]}
//                   radius={hoveredProperty === p.id ? 14 : 8}
//                   pathOptions={{
//                     color: hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
//                     fillColor: hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
//                     fillOpacity: 1,
//                     weight: 3,
//                   }}
//                 >
//                   <Popup closeButton={false}>
//                     <p className="font-bold text-sm">{p.propertyType}</p>
//                     <p className="text-xs">{p.locality}</p>
//                   </Popup>
//                 </CircleMarker>
//               ))}
//           </MapContainer>

//           <button
//             onClick={() => setParams({})}
//             className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
//           >
//             <Navigation2 size={20} />
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import {
  MapPin,
  Building2,
  Search,
  Navigation2,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

const CHENNAI_CENTER = [13.0827, 80.2707];
const CHENNAI_ZOOM = 12;

/* ---------------- MAP CONTROLLER ---------------- */
const MapController = ({ properties }) => {
  const map = useMap();

  useEffect(() => {
    if (!properties.length) {
      map.flyTo(CHENNAI_CENTER, CHENNAI_ZOOM, { duration: 1.5 });
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
  }, [properties, map]);

  return null;
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function PropertyListing() {
  const [params, setParams] = useSearchParams();
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = params.get("location") || "";
  const type = params.get("type") || "";
  const query = params.get("q") || "";

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((res) => {
        const list = res?.data || [];

        const normalized = list
          .map((p) => {
            const lat = Number(p.lat);
            const lng = Number(p.lng);

            if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

            return {
              id: p.id,
              propertyType: p.propertyType || "Property",
              city: p.city || "",
              state: p.state || "",
              locality: p.locality?.trim() || p.city || "",
              developer: p.developer || "Developer",
              lat,
              lng,
              image: p.image || "",
            };
          })
          .filter(Boolean);

        setProperties(normalized);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load properties", err);
        setLoading(false);
      });
  }, []);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const locationText = `${p.city} ${p.state} ${p.locality}`.toLowerCase();
      const nameText = `${p.propertyType} ${p.developer}`.toLowerCase();

      const locationMatch = location
        ? locationText.includes(location.toLowerCase())
        : true;

      const typeMatch = type
        ? p.propertyType.toLowerCase() === type.toLowerCase()
        : true;

      const keywordMatch = query
        ? nameText.includes(query.toLowerCase())
        : true;

      return locationMatch && typeMatch && keywordMatch;
    });
  }, [properties, location, type, query]);

  /* ---------------- UI ---------------- */
  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-white border-b px-6 py-4 flex flex-col md:flex-row gap-4 items-center sticky top-0 z-20 shadow-sm">
        <h1 className="text-xl font-bold">RealEstateX</h1>

        <div className="relative flex-1 max-w-md w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={location}
            onChange={(e) =>
              setParams({ location: e.target.value, q: query, type })
            }
            placeholder="Search city or locality..."
            className="w-full bg-gray-100 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
          <Filter size={16} /> Filters
        </button>
      </header>

      {/* CONTENT */}
      <main className="flex flex-1 overflow-hidden">
        {/* LIST */}
        <div className="w-full md:w-[460px] bg-white border-r flex flex-col">
          <div className="p-5 border-b bg-white">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Results Found
            </p>
            <h2 className="text-2xl font-bold">
              {loading
                ? "Loading..."
                : `${filteredProperties.length} Properties`}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
            <AnimatePresence>
              {loading ? (
                <p className="text-center py-20">Loading properties...</p>
              ) : filteredProperties.length === 0 ? (
                <motion.div className="text-center py-20">
                  <Search size={40} className="mx-auto text-gray-400 mb-4" />
                  <p className="font-medium">No properties found</p>
                </motion.div>
              ) : (
                filteredProperties.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    onMouseEnter={() => setHoveredProperty(p.id)}
                    onMouseLeave={() => setHoveredProperty(null)}
                    className="bg-white rounded-2xl border overflow-hidden transition shadow hover:shadow-lg hover:ring-2 hover:ring-blue-500"
                  >
                    <div className="flex h-36">
                      <img
                        src={
                          p.image ||
                          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                        }
                        className="w-40 h-full object-cover"
                        alt={p.propertyType}
                      />
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg">
                            {p.propertyType}
                          </h3>
                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin size={12} />
                            {p.locality}, {p.city}
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t text-xs">
                          <span className="flex items-center gap-1">
                            <Building2 size={12} />
                            {p.developer}
                          </span>
                          <span className="font-bold">₹ Price on Req</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MAP */}
        <div className="hidden md:block flex-1 relative">
          <MapContainer
            center={CHENNAI_CENTER}
            zoom={CHENNAI_ZOOM}
            zoomControl={false}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
            <MapController properties={filteredProperties} />

            {filteredProperties.map((p) => (
              <CircleMarker
                key={p.id}
                center={[p.lat, p.lng]}
                radius={hoveredProperty === p.id ? 14 : 8}
                pathOptions={{
                  color: hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
                  fillColor:
                    hoveredProperty === p.id ? "#3b82f6" : "#0f172a",
                  fillOpacity: 1,
                  weight: 3,
                }}
              >
                <Popup closeButton={false}>
                  <p className="font-bold text-sm">{p.propertyType}</p>
                  <p className="text-xs">
                    {p.locality}, {p.city}
                  </p>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          <button
            onClick={() => setParams({})}
            className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <Navigation2 size={20} />
          </button>
        </div>
      </main>
    </div>
  );
}