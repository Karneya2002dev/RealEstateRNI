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
