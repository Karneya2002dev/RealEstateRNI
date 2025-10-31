import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage from "../../assets/about-welcome.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Smooth Image Entry Animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });

      // 🔹 Parallax Image Motion
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 🔹 Subtle Glow Parallax Depth
      gsap.to(glowRef.current, {
        yPercent: -6,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 🔹 Heading Fade-Up
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // 🔹 Paragraphs Staggered Entry
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      // 🔹 CTA Button Pop-In
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-[#f8f2e9] overflow-hidden"
      aria-label="About Real Estate Network India"
    >
      {/* Background Layers for Soft Depth */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div
              ref={glowRef}
              className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl"
            />
            <img
              src={aboutImage}
              alt="Professional real estate partnership"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border border-white/10"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
            >
              Welcome to{" "}
              <span className="relative text-primary">
                Real Estate Network India
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary rounded-full"></span>
              </span>
            </h2>

            <div ref={textRef}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At <span className="font-semibold text-gray-800">Real Estate Network India</span>,
                we believe real estate is more than just transactions — it’s about building trust,
                clarity, and long-term relationships with every client we serve.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you’re buying, investing, or managing property, our mission is to make your
                journey simpler, smarter, and more rewarding — blending technology, transparency,
                and a human touch.
              </p>
            </div>

            <div ref={buttonRef}>
              <button className="px-8 py-3 bg-primary  font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  );
};

export default About;
