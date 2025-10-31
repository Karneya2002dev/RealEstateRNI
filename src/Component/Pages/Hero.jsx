import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../assets/hero-buildings.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  // 🔹 Trigger text animation when in view
  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  // 🔹 GSAP Background Parallax & Overlay
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.15,
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(bgRef.current.querySelector(".overlay"), {
        opacity: 0.65,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔹 Framer Motion Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* 🔹 Background with Overlay */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay absolute inset-0 bg-black/50 transition-all duration-700" />
      </div>

      {/* 🔹 Centered Animated Text */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 text-center select-none"
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        >
          Real Estate Network India
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-2"
        >
          Your Trusted Partner in Real Estate Solutions
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 font-medium tracking-wide mt-2"
        >
          <span className="font-semibold text-white">Manage My Estate</span> — RNI
        </motion.p>
      </div>

      {/* 🔹 Bottom Decorative Wave */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
      >
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.56C906.67 64.45 823.78 29.55 743.84 14.47 
               661.76-1.06 578.4 4.04 497.15 23.73 
               418.55 42.63 343.47 75.87 266.19 95.03 
               178.93 116.52 87.94 124.05 0 104.93V120h1200V97.52
               C1121.49 118.39 1053.61 103.06 985.66 83.56z"
            fill="#f8f2e9"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
