// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Building2,
//   MapPin,
//   Phone,
//   Mail,
//   ShieldCheck,
//   BadgeCheck,
//   Crown,
//   ExternalLink
// } from "lucide-react";
// import buildersData from "./BuilderData";

// const Builders = () => {
//   return (
//     <section className="w-full py-24 bg-white relative overflow-hidden">
//       {/* Subtle Background Detail */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4"
//           >
//             <ShieldCheck size={14} className="text-blue-600" /> Verified Panel Members
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
//             Builders & <span className="text-blue-600">Promoters</span>
//           </h2>
//           <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg font-light leading-relaxed">
//             Accredited professionals shaping trusted real estate developments across the region.
//           </p>
          
//           <div className="mt-6 inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-mono text-[10px] font-bold">
//             MEMBERS ENROLLED: {buildersData.length}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {buildersData.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="group relative"
//             >
//               {/* Card Container */}
//               <div className="relative h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-blue-200 flex flex-col">
                
//                 {/* Header: Reg No & Icon */}
//                 <div className="flex justify-between items-start mb-8">
//                   <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 text-slate-400 text-[10px] font-bold tracking-tighter">
//                     <BadgeCheck size={12} className="text-blue-500" />
//                     {member.registrationNo}
//                   </div>
//                   <div className="text-slate-200 group-hover:text-blue-500 transition-colors duration-500">
//                     <Crown size={24} strokeWidth={1.5} />
//                   </div>
//                 </div>

//                 {/* Identity */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
//                     {member.name}
//                   </h3>
//                   <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-md">
//                     {member.designation}
//                   </div>
//                 </div>

//                 {/* Organization Box (The Professional Touch) */}
//                 <div className="mt-auto bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 transition-all group-hover:bg-blue-50/50 group-hover:border-blue-100">
//                   <div className="flex items-start gap-4">
//                     <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400 group-hover:text-blue-500 transition-colors">
//                       <Building2 size={18} />
//                     </div>
//                     <div>
//                       <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Firm Name</span>
//                       <p className="text-sm font-bold text-slate-800 leading-snug">
//                         {member.company}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer Actions */}
//                 <div className="pt-6 border-t border-slate-50">
//                   <div className="flex items-center gap-2 text-slate-400 mb-6">
//                     <MapPin size={14} className="text-blue-500" />
//                     <span className="text-xs font-bold uppercase tracking-wide">{member.city}</span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     <a
//                       href={`mailto:${member.email}`}
//                       className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-100"
//                     >
//                       <Mail size={14} /> EMAIL
//                     </a>
//                     <a
//                       href={`tel:${member.phone}`}
//                       className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
//                     >
//                       <Phone size={14} /> CALL
//                     </a>
//                   </div>
//                 </div>

//                 {/* Subtle Hover Accent Line */}
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/3 transition-all duration-500 rounded-t-full" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Builders;



import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  BadgeCheck,
  Crown,
  ExternalLink
} from "lucide-react";
import buildersData from "./BuilderData";

const isTopRole = (role) =>
  role.toLowerCase().includes("president") ||
  role.toLowerCase().includes("chairman");

const Builders = () => {
  return (
    <section className="w-full py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.25em] mb-5 shadow-sm"
          >
            <ShieldCheck size={14} className="text-blue-600" />
            Verified Panel Members
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Builders & <span className="text-blue-600">Promoters</span>
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg font-light">
            Trusted professionals delivering verified real estate developments
            across Tamil Nadu.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-mono text-[10px] font-bold tracking-widest">
            MEMBERS ENROLLED: {buildersData.length}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {buildersData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-8 flex flex-col transition-all duration-500 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] hover:border-blue-200">
                
                {/* Top Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500">
                    <BadgeCheck size={12} className="text-blue-500" />
                    {member.registrationNo}
                  </div>

                  {isTopRole(member.designation) && (
                    <Crown
                      size={22}
                      className="text-amber-500 opacity-70 group-hover:opacity-100 transition"
                    />
                  )}
                </div>

                {/* Name */}
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition">
                    {member.name}
                  </h3>

                  <span className="inline-block mt-3 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                    {member.designation}
                  </span>
                </div>

                {/* Company */}
                <div className="mt-auto mb-8 bg-slate-50 border border-slate-100 rounded-2xl p-5 group-hover:bg-blue-50/60 group-hover:border-blue-100 transition">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400 group-hover:text-blue-500 transition">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                        Firm
                      </span>
                      <p className="text-sm font-bold text-slate-800 leading-snug">
                        {member.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400 mb-6">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      {member.city}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Email */}
                    <a
                      href={member.email ? `mailto:${member.email}` : "#"}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition
                        ${
                          member.email
                            ? "bg-slate-900 text-white hover:bg-blue-600 shadow-lg"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        }`}
                    >
                      <Mail size={14} /> Email
                    </a>

                    {/* Call */}
                    <a
                      href={member.phone ? `tel:${member.phone}` : "#"}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition
                        ${
                          member.phone
                            ? "bg-white border border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        }`}
                    >
                      <Phone size={14} /> Call
                    </a>

                    {/* Website */}
                    {member.website ? (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-600 hover:text-white transition"
                      >
                        <ExternalLink size={14} /> Site
                      </a>
                    ) : (
                      <div className="flex items-center justify-center py-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold">
                        N/A
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-blue-600 rounded-t-full group-hover:w-1/3 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Builders;
