import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../../assets/logoo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Gallery", href: "#gallery" },
      { name: "Listings", href: "#listings" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-sky-500" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] text-gray-300">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_60%)] animate-pulse" />

      {/* Floating Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="RNI Real Estate Network India"
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <h3 className="font-bold text-lg text-white">
                  RNI Real Estate Network India
                </h3>
                <p className="text-xs text-gray-400">
                  ..reality solutions simplified
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner in real estate management, providing
              professional services with integrity, innovation, and excellence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative after:absolute after:w-12 after:h-[2px] after:bg-gradient-to-r from-primary to-accent after:-bottom-1 after:left-0">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-all duration-300 hover:pl-1 flex items-center gap-1"
                  >
                    <span>›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative after:absolute after:w-12 after:h-[2px] after:bg-gradient-to-r from-primary to-accent after:-bottom-1 after:left-0">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-all duration-300 hover:pl-1 flex items-center gap-1"
                  >
                    <span>›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative after:absolute after:w-12 after:h-[2px] after:bg-gradient-to-r from-primary to-accent after:-bottom-1 after:left-0">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span>info@rniestateindia.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span>
                  123 Real Estate Blvd <br /> Suite 400, City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`group p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-500 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center">
              © {currentYear}{" "}
              <span className="text-white font-semibold">
                RNI Real Estate Network India
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
