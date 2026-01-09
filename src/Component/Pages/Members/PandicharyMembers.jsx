import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  UserCircle2,
  ArrowRight
} from "lucide-react";
import members from "./Pandychary"; // Path to your data file

const PondicherryCouncil = () => {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Patron Page Dot Matrix Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 border-l-4 border-blue-600 pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2"
          >
            <ShieldCheck size={14} /> State Executive Committee
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Pondicherry <span className="text-blue-600">State Panel</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl font-medium">
            The primary leadership council governing real estate operations and ethical standards for the Pondicherry region.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full bg-white border border-slate-200 rounded-[2.5rem] p-7 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] hover:border-blue-500/30 flex flex-col">
                
                {/* 1. Profile Avatar (Patron Style) */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {/* If you have images, replace UserCircle2 with <img /> */}
                  <UserCircle2 
                    size={100} 
                    strokeWidth={1} 
                    className="text-slate-200 group-hover:text-blue-100 transition-colors duration-500" 
                  />
                  
                  {/* Reg No Badge Overlay */}
                  {member.regNo && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-sm">
                      <span className="text-[9px] font-black text-blue-600 tracking-tighter">
                        {member.regNo}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Identity & Position Badge */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-px w-4 bg-blue-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {member.designation}
                  </span>
                </div>

                {/* 3. Company Box (Satisfying Layout) */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-white rounded-lg shadow-sm text-slate-400 group-hover:text-blue-500 transition-colors">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Enterprise</span>
                      <p className="text-sm font-bold text-slate-800 leading-tight mt-0.5">
                        {member.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Action Area */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                      {member.location}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                    <a 
                      href={`tel:${member.phone}`}
                      className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-md"
                    >
                      <Phone size={16} />
                    </a>
                  </div>
                </div>

                {/* Corner Accent Link Icon */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                  <ArrowRight size={14} className="text-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PondicherryCouncil;