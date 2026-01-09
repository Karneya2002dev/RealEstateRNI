
// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   MapPin, 
//   Building2, 
//   UserCircle2, 
//   ShieldCheck, 
//   ExternalLink,
//   Mail,
//   Phone
// } from "lucide-react";
// import architectsData from "./Architech"; 

// const ArchitectsPanel = () => {
//   return (
//     <section className="w-full py-24 bg-white relative overflow-hidden">
//       {/* Background Texture similar to Patron Page */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Section Header */}
//         <div className="mb-20 border-l-4 border-blue-600 pl-6">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2"
//           >
//             <ShieldCheck size={14} /> Certified Architecture Panel
//           </motion.div>
//           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
//             Design <span className="text-blue-600">& Vision</span>
//           </h2>
//           <p className="mt-3 text-slate-500 max-w-xl">
//             A directory of leading architects dedicated to sustainable and innovative urban planning.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {architectsData.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05 }}
//             >
//               <div className="group relative h-full bg-white border border-slate-200 rounded-[2.5rem] p-7 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:border-blue-500/30 flex flex-col">
                
//                 {/* 1. Image Section (Rounded Square Style) */}
//                 <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-3xl bg-slate-100 shadow-inner">
//                   {member.img ? (
//                     <img
//                       src={member.img}
//                       alt={member.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-slate-300">
//                       <UserCircle2 size={80} strokeWidth={1} />
//                     </div>
//                   )}
//                   {/* Identification Tag */}
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-sm">
//                     <span className="text-[9px] font-bold text-slate-500 tracking-tighter">
//                       REG: {member.registrationNo}
//                     </span>
//                   </div>
//                 </div>

//                 {/* 2. Name & Title */}
//                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
//                   {member.name}
//                 </h3>
                
//                 <div className="mt-2 flex items-center gap-2">
//                   <div className="h-px w-4 bg-blue-300" />
//                   <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
//                     {member.designation}
//                   </span>
//                 </div>

//                 {/* 3. Company Section (Box Style) */}
//                 <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
//                   <div className="flex items-start gap-3">
//                     <div className="mt-1 p-1.5 bg-white rounded-lg shadow-sm text-slate-400">
//                       <Building2 size={16} />
//                     </div>
//                     <div>
//                       <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Architecture Firm</span>
//                       <p className="text-sm font-bold text-slate-800 leading-tight mt-0.5">
//                         {member.company}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 4. Action Area */}
//                 <div className="mt-auto pt-6 flex items-center justify-between">
//                   <div className="flex items-center gap-1.5 text-slate-400">
//                     <MapPin size={14} className="text-blue-500" />
//                     <span className="text-[11px] font-bold uppercase tracking-wide">{member.city}</span>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <a 
//                       href={`mailto:${member.email}`}
//                       className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
//                     >
//                       <Mail size={16} />
//                     </a>
//                     <a 
//                       href={`tel:${member.phone}`}
//                       className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-md"
//                     >
//                       <Phone size={16} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Decorative Element */}
//                 <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                    <ExternalLink size={14} className="text-blue-400" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArchitectsPanel;


import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  UserCircle2,
  ShieldCheck,
  ExternalLink,
  Mail,
  Phone,
} from "lucide-react";
import architectsData from "./Architech";

const ArchitectsPanel = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 border-l-4 border-blue-600 pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2"
          >
            <ShieldCheck size={14} />
            Certified Architecture Panel
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Design <span className="text-blue-600">& Vision</span>
          </h2>

          <p className="mt-3 text-slate-500 max-w-xl">
            A directory of leading architects dedicated to sustainable and innovative urban planning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {architectsData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="group relative h-full bg-white border border-slate-200 rounded-[2.5rem] p-7 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:border-blue-500/30 flex flex-col">
                
                {/* Image */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-3xl bg-slate-100 shadow-inner">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <UserCircle2 size={80} strokeWidth={1} />
                    </div>
                  )}

                  {/* Registration */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500">
                      REG: {member.regNo}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-px w-4 bg-blue-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {member.designation}
                  </span>
                </div>

                {/* Company */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border group-hover:bg-blue-50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-white rounded-lg shadow-sm text-slate-400">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase">
                        Architecture Firm
                      </span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        {member.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-[11px] font-bold uppercase">
                      {member.location}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition"
                    >
                      <Mail size={16} />
                    </a>

                    <a
                      href={`tel:${member.phone}`}
                      className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition"
                    >
                      <Phone size={16} />
                    </a>

                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectsPanel;
