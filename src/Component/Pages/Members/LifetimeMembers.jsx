import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { lifetimeMembers } from "./Lifetime";

const LifetimeMembers = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-10 bg-gradient-to-b from-slate-50 to-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Lifetime Members
        </h2>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Honoring our distinguished lifetime members who shape the industry
        </p>
      </div>

      {/* Navigation */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
        bg-white/80 backdrop-blur-md shadow-lg 
        p-3 rounded-full hover:bg-sky-500 hover:text-white transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
        bg-white/80 backdrop-blur-md shadow-lg 
        p-3 rounded-full hover:bg-sky-500 hover:text-white transition"
      >
        <ChevronRight />
      </button>

      {/* Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-hidden py-5 scroll-smooth px-20"
      >
        {lifetimeMembers.map((member) => (
          <div
            key={member.id}
            className="group  relative   min-w-[300px] md:min-w-[340px]
            rounded-3xl p-6 bg-white/70 backdrop-blur-xl
            shadow-xl border border-slate-200
            hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
              from-sky-400/20 to-indigo-400/20 opacity-0 
              group-hover:opacity-100 transition" />

            {/* Avatar */}
            <div className="relative mt-1 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-slate-700">
                  {member.name.charAt(0)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative text-center">
              <h3 className="text-xl font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="text-sky-600 text-sm font-medium mt-1">
                {member.designation}
              </p>
              <p className="text-slate-600 text-sm mt-1">
                {member.company}
              </p>

              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-2">
                <MapPin size={14} />
                <span>{member.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifetimeMembers;
