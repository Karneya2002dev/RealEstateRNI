// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import flat from "../../assets/flatt.png"

// const categories = [
//   {
//     title: "NEW FLATS",
//     img: {flat},
//     count: "1 Project",
//   },
//   // {
//   //   title: "OLD USED FLATS",
//   //   img: "/images/usedflats.jpg",
//   //   count: "2 Projects",
//   // },
//   // {
//   //   title: "PLOT - Residential",
//   //   img: "/images/resplot.jpg",
//   //   count: "4 Projects",
//   // },
//   // {
//   //   title: "PLOT - Commercial",
//   //   img: "/images/complot.jpg",
//   //   count: "3 Projects",
//   // },
// ];

// export default function PropertyCategorySlider() {
//   return (
//     <div className="pt-16 pb-20 bg-cover bg-center relative"
//       style={{ backgroundImage: "url('/images/bgproperty.jpg')" }}
//     >
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           🏘️ Explore Different Properties
//         </h2>
//         <p className="text-gray-300 md:text-lg mt-2">
//           Your gateway to a diverse range of exceptional real estate offerings.
//         </p>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
        
//         {/* Left Button */}
//         <button className="swiper-button-prev !left-0 bg-white text-red-500 shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
//           <ChevronLeft size={24} />
//         </button>

//         {/* Slider */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           loop={true}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           modules={[Navigation]}
//         >
//           {categories.map((item, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-48 object-cover"
//                   alt={item.title}
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                   <p className="text-sm text-gray-500">{item.count}</p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Right Button */}
//         <button className="swiper-button-next !right-0 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { PROPERTIES } from "../Data/Properties";
import "leaflet/dist/leaflet.css";

export default function PropertyListing() {
  const [params] = useSearchParams();
  const type = params.get("type");        // buy / rent / sell
  const location = params.get("location"); // Chennai, Coimbatore

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const typeMatch = type ? p.type === type : true;
      const cityMatch = location
        ? p.city.toLowerCase().includes(location.toLowerCase())
        : true;
      return typeMatch && cityMatch;
    });
  }, [type, location]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      {/* <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-8 px-6 py-4">
          <h1 className="text-2xl font-bold text-[#b99763]">Cosmo Soil</h1>
        </div>
      </header> */}

      {/* Title bar */}
      <div className="bg-[#b99763] text-white text-center py-3 text-lg">
        Showing {type?.toUpperCase() || "All"} properties in {location || "Tamil Nadu"}
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-[35%_45%_20%] grid-cols-1 md:h-[calc(100vh-112px)] gap-4 p-4">
        
        {/* ================= MAP ================= */}
        <div className="border rounded-lg overflow-hidden h-96 md:h-full">
          <MapContainer
            center={[22.5, 78.9]}
            zoom={5}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filteredProperties.map((p) => (
              <CircleMarker
                key={p.id}
                center={[p.lat, p.lng]}
                radius={10}
                pathOptions={{ color: "#b99763", fillOpacity: 0.6 }}
              >
                <Popup>
                  <div className="text-sm">
                    <p><b>{p.propertyType}</b></p>
                    <p>{p.locality}, {p.city}</p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        {/* ================= LISTINGS ================= */}
        <div className="overflow-y-auto space-y-4">
          {filteredProperties.length === 0 && (
            <p className="text-center text-gray-500">
              No properties found
            </p>
          )}

          {filteredProperties.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                src="https://via.placeholder.com/150"
                className="rounded w-full md:w-40 h-32 md:h-32 object-cover"
                alt=""
              />
              <div className="flex-1 text-sm flex flex-col justify-between">
                <div>
                  <p><b>Owner:</b> {p.owner}</p>
                  <p><b>Developer:</b> {p.developer}</p>
                  <p><b>Type:</b> {p.propertyType}</p>
                  <p><b>Locality:</b> {p.locality}</p>
                  <p><b>City:</b> {p.city}</p>
                </div>
                <button className="bg-[#b99763] text-white text-sm mt-2 py-2 rounded hover:bg-[#a57c4e] transition">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ADS ================= */}
        <aside className="hidden md:block p-4 bg-white border-l rounded-lg sticky top-24 h-fit">
          <h3 className="font-semibold mb-3 text-[#b99763]">
            Sponsored
          </h3>
          <img
            src="https://via.placeholder.com/300x600"
            className="rounded shadow w-full"
            alt=""
          />
        </aside>
      </div>
    </div>
  );
}
