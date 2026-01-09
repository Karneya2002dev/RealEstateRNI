// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Briefcase, MapPin, IdCard, ExternalLink, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";
// import OwnersData from "./OwnersPage";

// const OwnersCard = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section className="relative px-6 py-24 overflow-hidden">
//       {/* Ambient Background Glows */}
//       <div className="absolute top-0 left-1/4 w-96 h-96  rounded-full blur-[120px] pointer-events-none" />
//       {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" /> */}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block"
//           >
//             Leadership Team
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
//           >
//             Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Council</span>
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {OwnersData.map((member) => (
//             <motion.div
//               key={member.id}
//               onMouseEnter={() => setHoveredId(member.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -5 }}
//               className="group relative"
//             >
//               {/* Animated Border Gradient */}
//               <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-100 transition duration-500`} />
              
//               <div className="relative h-full bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center">
                
//                 {/* Avatar with Ring Animation */}
//                 <div className="relative mb-6">
//                   <motion.div 
//                     animate={hoveredId === member.id ? { rotate: 360 } : { rotate: 0 }}
//                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                     className="absolute -inset-2 border-2 border-dashed border-cyan-500/30 rounded-full" 
//                   />
//                   <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-white/10 flex items-center justify-center text-cyan-400 shadow-2xl">
//                     <User size={40} strokeWidth={1.5} />
//                   </div>
//                   <div className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-4 border-slate-900" />
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm font-semibold text-slate-400 uppercase tracking-tighter mb-6">
//                   {member.designation}
//                 </p>

//                 {/* Info Stack */}
//                 <div className="w-full space-y-3 pt-6 border-t border-white/5">
//                   <div className="flex items-center gap-3 text-slate-300">
//                     <div className="p-2 bg-white/5 rounded-lg"><Briefcase size={14} /></div>
//                     <span className="text-sm truncate">{member.company}</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-slate-400">
//                     <div className="p-2 bg-white/5 rounded-lg"><MapPin size={14} /></div>
//                     <span className="text-sm">{member.location}</span>
//                   </div>
//                 </div>

//                 {/* Innovative CTA */}
//                 <Link
//                   to={member.link}
//                   className="mt-8 group/btn relative overflow-hidden w-full py-3 rounded-xl bg-white text-black font-bold text-sm transition-all flex items-center justify-center gap-2"
//                 >
//                   <span className="relative z-10">VIEW DOSSIER</span>
//                   <ExternalLink size={14} className="relative z-10" />
//                   <motion.div 
//                     className="absolute inset-0 bg-cyan-400"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: 0 }}
//                     transition={{ type: "tween" }}
//                   />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OwnersCard;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Briefcase, MapPin, ExternalLink, Shield } from "lucide-react";
// import { Link } from "react-router-dom";
// import OwnersData from "./OwnersPage";

// const OwnersCard = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     // Clean White Background with a very subtle slate-50 tint
//     <section className="relative px-6 py-24 bg-[#FAFAFA] overflow-hidden">
//       {/* Soft Decorative Elements for a professional feel */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -skew-x-12 transform origin-top translate-x-32 pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4"
//           >
//             <Shield size={12} /> Organizational Leadership
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
//           >
//             Executive <span className="text-blue-600">Council</span>
//           </motion.h2>
//           <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {OwnersData.map((member) => (
//             <motion.div
//               key={member.id}
//               onMouseEnter={() => setHoveredId(member.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="group relative h-full"
//             >
//               {/* Card Container */}
//               <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                
//                 {/* Profile Header */}
//                 <div className="flex flex-col items-center mb-6">
//                   <div className="relative mb-4">
//                     {/* Subtle outer ring */}
//                     <div className={`absolute -inset-2 rounded-full border-2 border-slate-100 transition-all duration-500 ${hoveredId === member.id ? 'border-blue-100 scale-110' : ''}`} />
                    
//                     <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors duration-300">
//                       <User size={32} strokeWidth={1.5} />
//                     </div>
                    
//                     {/* Status badge */}
//                     <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm">
//                       <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-bold text-slate-800 text-center leading-tight">
//                     {member.name}
//                   </h3>
//                   <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mt-1 text-center">
//                     {member.designation}
//                   </p>
//                 </div>

//                 {/* Info List */}
//                 <div className="space-y-4 pt-4 border-t border-slate-100">
//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 p-1.5 bg-slate-50 rounded text-slate-500">
//                       <Briefcase size={14} />
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="text-[10px] text-slate-400 font-bold uppercase">Company</span>
//                       <span className="text-sm text-slate-700 font-medium leading-tight">{member.company}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <div className="mt-0.5 p-1.5 bg-slate-50 rounded text-slate-500">
//                       <MapPin size={14} />
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="text-[10px] text-slate-400 font-bold uppercase">Location</span>
//                       <span className="text-sm text-slate-700 font-medium leading-tight">{member.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* View Button */}
//                 <Link
//                   to={member.link}
//                   className="mt-8 flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300"
//                 >
//                   <span className="text-xs font-bold tracking-wide">VIEW PROFILE</span>
//                   <ExternalLink size={14} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OwnersCard;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  MapPin, 
  IdCard, 
  ArrowUpRight, 
  ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import OwnersData from "./OwnersPage";

const OwnersCard = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Executive <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl text-lg">
              Meet the visionaries steering our strategic direction and operational excellence.
            </p>
          </div>
          <div className="h-1 w-24 bg-blue-600 rounded-full hidden md:block mb-2" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {OwnersData.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Avatar with dynamic border */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:border-blue-100 transition-all duration-300 shadow-inner">
                    <User size={40} strokeWidth={1.5} className="group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 p-1.5 rounded-full border-4 border-white text-white">
                    <IdCard size={12} />
                  </div>
                </div>

                {/* Member Identity */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2">
                    {member.designation}
                  </p>
                </div>

                {/* Professional Details Stack */}
                <div className="w-full space-y-3 py-6 border-t border-slate-50">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                      <Briefcase size={14} className="group-hover:text-blue-500" />
                    </div>
                    <span className="text-sm font-medium line-clamp-1">{member.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-500">
                    <div className="p-2 bg-slate-50 rounded-lg">
                      <MapPin size={14} />
                    </div>
                    <span className="text-sm">{member.location}</span>
                  </div>
                </div>

                {/* Action Link */}
                {/* <Link
                  to={member.link}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold group-hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 group-hover:shadow-blue-200"
                >
                  View Profile 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnersCard;