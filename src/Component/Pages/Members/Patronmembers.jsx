// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useRef } from "react";
// import { patronMembers } from "./Patron";
// import { Link } from "react-router-dom";
// const Patronmembers = () => {
//   const sliderRef = useRef(null);

//   const scroll = (direction) => {
//     if (!sliderRef.current) return;

//     const width = sliderRef.current.offsetWidth;
//     sliderRef.current.scrollBy({
//       left: direction === "left" ? -width : width,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative w-full py-20 bg-gradient-to-b from-slate-50 to-white">
//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
//           Patron Members
//         </h2>
//         <p className="mt-3 text-slate-600">
//           Pillars of leadership and excellence
//         </p>
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10
//         bg-white/80 backdrop-blur border border-slate-200
//         text-slate-800 p-3 rounded-full shadow-lg
//         hover:bg-sky-500 hover:text-white transition"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => scroll("right")}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10
//         bg-white/80 backdrop-blur border border-slate-200
//         text-slate-800 p-3 rounded-full shadow-lg
//         hover:bg-sky-500 hover:text-white transition"
//       >
//         <ChevronRight />
//       </button>

//       {/* Carousel */}
//       <div
//         ref={sliderRef}
//         className="flex gap-8 overflow-x-hidden mx-16 py-5 scroll-smooth px-15"
//       >
//         {patronMembers.map((member) => (
//           <Link
//             to={member.link}
//             key={member.id}
//             className="group min-w-[300px] md:min-w-[340px]
//             rounded-3xl bg-white/70 backdrop-blur-xl
//             border border-white/60 shadow-xl
//             p-8 text-center transition
//             hover:-translate-y-2 hover:shadow-2xl"
//           >
//             {/* Avatar with gradient ring */}
//             <div className="relative mx-auto mb-5 w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-1">
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-full rounded-full object-cover bg-white"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="text-lg font-bold text-slate-900">
//               {member.name}
//             </h3>

//             {/* Role */}
//             <p className="text-sky-600 text-sm font-medium mt-1">
//               {member.designation}
//             </p>

//             {/* Company */}
//             <p className="text-slate-700 text-sm mt-2 leading-snug">
//               {member.company}
//             </p>

//             {/* Location */}
//             <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">
//               {member.location}
//             </p>

//             {/* Hover ID */}
//             <div
//               className="mt-4 opacity-0 group-hover:opacity-100
//               transition text-xs text-slate-400"
//             >
//               Member ID: {member.id}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Patronmembers;



// import React from "react";
// import { patronMembers } from "./Patron";
// import { Link } from "react-router-dom";

// const Patronmembers = () => {
//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
//           Patron Members
//         </h2>
//         <p className="mt-3 text-slate-600">
//           Pillars of leadership and excellence
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div
//           className="
//             grid gap-8
//             grid-cols-1
//             sm:grid-cols-2
//             md:grid-cols-3
//             lg:grid-cols-4
//             xl:grid-cols-5
//           "
//         >
//           {patronMembers.map((member) => (
//             <Link
//               to={member.link}
//               key={member.id}
//               className="group
//                 rounded-3xl bg-white/70 backdrop-blur-xl
//                 border border-white/60 shadow-xl
//                 p-8 text-center transition
//                 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               {/* Avatar */}
//               <div className="relative mx-auto mb-5 w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-1">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-full rounded-full object-cover bg-white"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="text-lg font-bold text-slate-900">
//                 {member.name}
//               </h3>

//               {/* Designation */}
//               <p className="text-sky-600 text-sm font-medium mt-1">
//                 {member.designation}
//               </p>

//               {/* Company */}
//               <p className="text-slate-700 text-sm mt-2 leading-snug">
//                 {member.company}
//               </p>

//               {/* Location */}
//               <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">
//                 {member.location}
//               </p>

//               {/* Member ID */}
//               <div
//                 className="mt-4 opacity-0 group-hover:opacity-100
//                 transition text-xs text-slate-400"
//               >
//                 Member ID: {member.id}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Patronmembers;




import React from "react";
import { motion } from "framer-motion";
import { patronMembers } from "./Patron";
import { Link } from "react-router-dom";
import { MapPin, Building2, Briefcase, Crown, ArrowRight } from "lucide-react";

const PatronMembers = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Patron <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">The foundational pillars of our organization.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {patronMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={member.link}
                className="group relative block h-full bg-white border border-slate-200 rounded-[2rem] p-7 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:border-blue-500/30"
              >
                {/* 1. Improved Avatar Section */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-sm border border-white/50">
                      <Crown size={16} className="text-amber-500" />
                    </div>
                  </div>
                </div>

                {/* 2. Name - Stronger Presence */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* 3. Redesigned POSITION (The "Badge" Style) */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-px w-4 bg-blue-200" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {member.designation}
                  </span>
                </div>

                {/* 4. Redesigned COMPANY (The "Box" Style) */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-white rounded-lg shadow-sm text-slate-400 group-hover:text-blue-500 transition-colors">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Organization</span>
                      <p className="text-sm font-bold text-slate-800 leading-tight mt-0.5">
                        {member.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Footer Details */}
                <div className="mt-6 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span className="text-xs font-semibold uppercase">{member.location}</span>
                  </div>
                  <div className="p-2 rounded-full bg-slate-100 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatronMembers;