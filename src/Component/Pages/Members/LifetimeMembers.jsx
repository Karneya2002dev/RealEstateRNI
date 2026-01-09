
// import React from "react";
// import { MapPin } from "lucide-react";
// import { lifetimeMembers } from "./Lifetime";

// const LifetimeMembers = () => {
//   return (
//     <section className="w-full py-12 bg-gradient-to-b from-slate-50 to-white">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-slate-900">
//           Lifetime Members
//         </h2>
//         <p className="text-slate-500 mt-2 max-w-xl mx-auto">
//           Honoring our distinguished lifetime members who shape the industry
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="px-6 md:px-16">
//         <div
//           className="
//             grid gap-8
//             grid-cols-1
//             sm:grid-cols-2
//             md:grid-cols-3
//             lg:grid-cols-4
//           "
//         >
//           {lifetimeMembers.map((member) => (
//             <div
//               key={member.id}
//               className="
//                 group relative rounded-3xl p-6
//                 bg-white/70 backdrop-blur-xl
//                 shadow-xl border border-slate-200
//                 hover:-translate-y-2 hover:shadow-2xl
//                 transition-all duration-300
//               "
//             >
//               {/* Glow Effect */}
//               <div
//                 className="absolute inset-0 rounded-3xl bg-gradient-to-r 
//                 from-sky-400/20 to-indigo-400/20 opacity-0 
//                 group-hover:opacity-100 transition"
//               />

//               {/* Avatar */}
//               <div className="relative mt-2 flex justify-center">
//                 <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 p-1">
//                   <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-slate-700">
//                     {member.name.charAt(0)}
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative text-center mt-4">
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {member.name}
//                 </h3>
//                 <p className="text-sky-600 text-sm font-medium mt-1">
//                   {member.designation}
//                 </p>
//                 <p className="text-slate-600 text-sm mt-1">
//                   {member.company}
//                 </p>

//                 <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-2">
//                   <MapPin size={14} />
//                   <span>{member.location}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifetimeMembers;




import React from "react";
import { motion } from "framer-motion";
import { MapPin, Award, Building2, ShieldCheck } from "lucide-react";
import { lifetimeMembers } from "./Lifetime";

const LifetimeMembers = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <ShieldCheck size={14} /> Distinguished Honor Roll
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Lifetime <span className="text-blue-600">Members</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {lifetimeMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col items-center transition-all duration-500 hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
                
                {/* Prestige Icon Layer */}
                <div className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-100 transition-colors duration-500">
                  <Award size={40} strokeWidth={1} />
                </div>

                {/* Avatar with Ring */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full border border-dashed border-slate-200 group-hover:rotate-180 transition-transform duration-[4s] ease-linear" />
                  <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                    <span className="text-3xl font-bold italic tracking-tighter">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mt-2 px-3 py-1 bg-blue-50 rounded-lg inline-block">
                    {member.designation}
                  </p>
                </div>

                {/* Info Stack */}
                <div className="w-full mt-8 pt-6 border-t border-slate-50 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all">
                      <Building2 size={14} className="text-slate-400 group-hover:text-blue-500" />
                    </div>
                    <span className="text-sm font-semibold truncate">{member.company}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-slate-50 rounded-xl">
                      <MapPin size={14} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide">{member.location}</span>
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/3 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifetimeMembers;