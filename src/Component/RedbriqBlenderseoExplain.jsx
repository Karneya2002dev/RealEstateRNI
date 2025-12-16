// src/components/RedbriqBlenderseoExplain.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Zap,
  ArrowRight,
  Link,
  TrendingUp,
  Cpu,
  User,
} from "lucide-react";

/**
 * Create Microsite + Digital View + FunnelWorks explanation cards
 * Light Theme – production ready
 */

/* ===================== Animations ===================== */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

/* ===================== Tailwind-safe colors ===================== */

const colorClasses = {
  amber: {
    base: "bg-amber-600 hover:bg-amber-700",
    link: "text-amber-500",
    iconBg: "bg-amber-50 text-amber-600 border border-amber-200",
    strip: "bg-amber-500",
  },
  sky: {
    base: "bg-sky-600 hover:bg-sky-700",
    link: "text-sky-500",
    iconBg: "bg-sky-50 text-sky-600 border border-sky-200",
    strip: "bg-sky-500",
  },
  emerald: {
    base: "bg-emerald-600 hover:bg-emerald-700",
    link: "text-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    strip: "bg-emerald-500",
  },
  green: {
    iconBg: "bg-green-100 text-green-600",
  },
};

/* ===================== Feature Cards ===================== */

const features = [
  {
    title: "Create Microsite — Agent Pages & Property Showcase",
    description:
      "Create microsites instantly for real estate agents and projects. Each microsite includes property listings, inventory views, enquiry forms, and WhatsApp CTAs to capture high-intent buyers.",
    color: "amber",
    icon: Award,
    bullets: [
      "Instant agent & project microsite",
      "Property listings & inventory",
      "WhatsApp, call & enquiry capture",
    ],
    primaryLink: {
      href: "https://app.redbriq.com/developer/home",
      text: "Create Microsite",
      color: "amber",
      external: true,
    },
    secondaryLink: { href: "/signup", text: "Start free" },
  },
  {
    title: "Digital View — Search Visibility & Online Reach",
    description:
      "Digital View improves how your microsites appear online with location-based visibility, structured pages, and enhanced digital discovery.",
    color: "sky",
    icon: TrendingUp,
    bullets: [
      "Location-based digital pages",
      "Optimized content structure",
      "Higher online discoverability",
    ],
    primaryLink: {
      href: "https://realestatesnetworkindiapvtltd.com/blindersoe-panel/login",
      text: "Explore Digital View",
      color: "sky",
      external: true,
    },
    secondaryLink: { href: "/contact", text: "Request walkthrough" },
  },
  {
    title: "FunnelWorks — Automated Lead Nurturing",
    description:
      "FunnelWorks automates lead follow-ups with intelligent workflows, ensuring every enquiry is tracked, assigned, and converted.",
    color: "emerald",
    icon: Zap,
    bullets: [
      "Automated lead workflows",
      "Custom funnels for agents",
      "Smart task assignment",
    ],
    primaryLink: {
      href: "https://www.funnelworkz.com/",
      text: "Explore FunnelWorks",
      color: "emerald",
    },
    secondaryLink: { href: "/pricing", text: "Plans & pricing" },
  },
];

/* ===================== Component ===================== */

export default function RedbriqBlenderseoExplain() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-32 right-12 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-52 h-52 bg-emerald-100 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight"
          >
            Create Microsite → Digital View → Get Leads
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-gray-600 text-lg"
          >
            A complete real-estate growth flow — build microsites, boost digital
            visibility, and convert qualified leads.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((f) => {
            const Icon = f.icon;
            const classes = colorClasses[f.color];

            return (
              <motion.article
                key={f.title}
                variants={cardVariants}
                className="relative bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl ${classes.strip}`}
                />

                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-2xl ${classes.iconBg} mb-6`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-600 mb-6">{f.description}</p>

                <ul className="space-y-3 text-sm text-gray-700 mb-10 border-l-2 border-gray-200 pl-4">
                  {f.bullets.map((b, i) => (
                    <li key={i} className="flex items-start">
                      <Link
                        size={16}
                        className={`mr-2 mt-1 ${classes.link}`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={f.primaryLink.href}
                    target={f.primaryLink.external ? "_blank" : undefined}
                    rel={
                      f.primaryLink.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${colorClasses[f.primaryLink.color].base} text-white rounded-xl font-semibold`}
                  >
                    {f.primaryLink.text}
                    <ArrowRight size={16} />
                  </a>

                 <a
  href={f.secondaryLink.href}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
>
  {f.secondaryLink.text}
</a>

                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Final CTA */}
        <div className="text-center mt-28">
          <a
            href="https://app.redbriq.com/developer/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-amber-600 text-white rounded-full font-bold text-xl shadow-lg hover:bg-amber-700 hover:scale-[1.03] transition"
          >
            <Zap size={24} />
            Create Your Microsite Now
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
