// src/components/RedbriqBlenderseoExplain.jsx
import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Zap, ArrowRight, Link, TrendingUp, Cpu, User } from "lucide-react";

/**
 * Redbriq + BlenderSEO + FunnelWorks explanation cards (Light Theme - Enhanced)
 */

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  },
};

// Updated Redbriq details inserted here
const features = [
  {
    title: "RedBriq — Real Estate OS & Agent Micro-Sites",
    description:
      "RedBriq is a full real estate operating system that provides instant agent micro-sites, project portfolios, inventory tools, and a complete CRM layer — all crafted to help real estate teams scale their digital presence and close more deals.",
    color: "amber",
    icon: Award,
    bullets: [
      "SEO‑ready agent micro-site",
      "Project listings, inventory & digital brochures",
      "Lead capture forms, CTAs & WhatsApp integration",
    ],
    primaryLink: { href: "/demo/agent", text: "Try a demo", color: "amber" },
    secondaryLink: { href: "/signup", text: "Create micro-site" },
  },
  {
    title: "BlenderSEO — Local Search Dominance",
    description:
      "BlenderSEO boosts organic reach through keyword‑based landing pages, local ranking optimization, and automated SEO‑structured pages — ensuring your micro-sites and projects rank higher on Google.",
    color: "sky",
    icon: TrendingUp,
    bullets: [
      "Local keyword landing pages",
      "Technical + on‑page SEO",
      "Google Business optimization",
    ],
    primaryLink: { href: "/seo-overview", text: "How it works", color: "sky" },
    secondaryLink: { href: "/contact", text: "Talk to expert" },
  },
  {
    title: "FunnelWorks — Lead Intelligence & Automation",
    description:
      "FunnelWorks handles lead routing, scoring, and automated WhatsApp/SMS/email follow‑ups — guiding every prospect through a consistent funnel until they convert into booked site visits or sales.",
    color: "emerald",
    icon: Cpu,
    bullets: [
      "Lead scoring & routing",
      "Automated follow‑up workflows",
      "Deal stages, reminders & analytics",
    ],
    primaryLink: {
      href: "/funnel-demo",
      text: "View funnel demo",
      color: "emerald",
    },
    secondaryLink: { href: "/pricing", text: "Pricing & plans" },
  },
];

export default function RedbriqBlenderseoExplain() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden relative">
      {/* Floating UI blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-32 right-12 w-48 h-48 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-ping"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-52 h-52 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight text-gray-900"
          >
            The Integrated Real Estate Engine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-gray-600 text-lg"
          >
            Agent micro-sites, organic search traffic, and automated funnels — working together to capture, nurture, and convert high‑intent real estate leads.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 hidden md:block z-0 -translate-y-1/2">
            <svg width="100%" height="3" className="opacity-60">
              <line x1="20%" y1="1.5" x2="40%" y2="1.5" stroke="url(#line-gradient)" strokeWidth="3" strokeDasharray="10 6" />
              <line x1="60%" y1="1.5" x2="80%" y2="1.5" stroke="url(#line-gradient)" strokeWidth="3" strokeDasharray="10 6" />
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D1D5DB" />
                  <stop offset="100%" stopColor="#9CA3AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                variants={cardVariants}
                custom={index}
                className={`relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 ring-1 ring-gray-100 hover:shadow-${f.color}-200/50 transition-all duration-300 backdrop-blur-xl`}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl bg-gradient-to-r from-${f.color}-500 to-${f.color}-400`} />

                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-${f.color}-50 text-${f.color}-600 border border-${f.color}-200 mb-6`}>
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">{f.description}</p>

                <ul className="text-sm text-gray-700 space-y-3 mb-10 border-l-2 border-gray-200 pl-4">
                  {f.bullets.map((b, i) => (
                    <li key={i} className="flex items-start">
                      <Link size={17} className={`mr-2 mt-1 text-${f.color}-500`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a href={f.primaryLink.href} className={`inline-flex items-center gap-2 px-6 py-3 bg-${f.primaryLink.color}-600 text-white rounded-xl font-semibold hover:bg-${f.primaryLink.color}-700 transition transform hover:scale-[1.04]`}>
                    {f.primaryLink.text}
                    <ArrowRight size={16} />
                  </a>

                  <a href={f.secondaryLink.href} className="inline-flex items-center px-5 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition">
                    {f.secondaryLink.text}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Lead Flow Diagram */}
        <div className="mt-28 pt-12 border-t border-gray-200">
          <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">The End-to-End Lead Flow: Visualized</h3>

          <div className="flex flex-col items-center justify-center">
            {/* Diagram */}
            <div className="w-full max-w-5xl bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg mb-10">
              <p className="text-center text-gray-500 mb-6">How RedBriq + BlenderSEO + FunnelWorks work together:</p>

              <div className="flex flex-wrap items-center justify-between text-center gap-4 sm:gap-6 md:gap-10">
                {/* 1. Traffic */}
                <div className="flex flex-col items-center w-28 flex-shrink-0">
                  <span className="p-4 rounded-full bg-sky-100 text-sky-600 border border-sky-300"><TrendingUp size={24} /></span>
                  <p className="mt-3 text-sm font-semibold text-gray-800">1. Traffic</p>
                  <p className="text-xs text-gray-500 mt-1">SEO & Local Search</p>
                </div>

                <ArrowRight size={28} className="text-sky-500 hidden md:block flex-shrink-0" />
                <div className="w-full h-px bg-gray-200 block md:hidden"></div>

                {/* 2. Capture */}
                <div className="flex flex-col items-center w-28 flex-shrink-0">
                  <span className="p-4 rounded-full bg-amber-100 text-amber-600 border border-amber-300"><Award size={24} /></span>
                  <p className="mt-3 text-sm font-semibold text-gray-800">2. Capture</p>
                  <p className="text-xs text-gray-500 mt-1">RedBriq Micro-Site</p>
                </div>

                <ArrowRight size={28} className="text-emerald-500 hidden md:block flex-shrink-0" />
                <div className="w-full h-px bg-gray-200 block md:hidden"></div>

                {/* 3. Automation */}
                <div className="flex flex-col items-center w-28 flex-shrink-0">
                  <span className="p-4 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300"><Cpu size={24} /></span>
                  <p className="mt-3 text-sm font-semibold text-gray-800">3. Nurture</p>
                  <p className="text-xs text-gray-500 mt-1">FunnelWorks Automation</p>
                </div>

                <ArrowRight size={28} className="text-gray-500 hidden md:block flex-shrink-0" />
                <div className="w-full h-px bg-gray-200 block md:hidden"></div>

                {/* 4. Conversion */}
                <div className="flex flex-col items-center w-28 flex-shrink-0">
                  <span className="p-4 rounded-full bg-gray-100 text-gray-600 border border-gray-300"><User size={24} /></span>
                  <p className="mt-3 text-sm font-semibold text-gray-800">4. Convert</p>
                  <p className="text-xs text-gray-500 mt-1">Agent Action</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a 
  href="https://app.redbriq.com/login" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-10 py-4 bg-amber-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-amber-300 hover:bg-amber-700 transition transform hover:scale-[1.05]"
>
  <Zap size={20} />
  Start Your Free Agent Micro-Site
  <ArrowRight size={20} />
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
