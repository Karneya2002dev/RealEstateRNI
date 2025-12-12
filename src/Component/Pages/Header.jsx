import { useState, useEffect } from "react";
import {
  Menu, X, LogIn, LogOut, ChevronDown,
  Home, Building2, Landmark, Warehouse, Rocket, Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoo.png";

/* Property Items with Icons */
const propertyItems = [
  { label: "New Flats", icon: <Home size={16} />, path: "new-flats" },
  { label: "Old Used Flats", icon: <Building2 size={16} />, path: "old-flats" },
  { label: "Residential Plots", icon: <Landmark size={16} />, path: "plot-residential" },
  { label: "Commercial Plots", icon: <Landmark size={16} />, path: "plot-commercial" },
  { label: "New Villas", icon: <Home size={16} />, path: "new-villas" },
  { label: "Old Buildings", icon: <Warehouse size={16} />, path: "old-buildings" },
  { label: "Joint Venture", icon: <Rocket size={16} />, path: "joint-venture" },
  { label: "Old Villas", icon: <Home size={16} />, path: "old-villas" },
  { label: "Rental / Lease", icon: <Building2 size={16} />, path: "rental-lease" },
];

/* Add Investors Link Here */
const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Forum", href: "#forum" },
  { name: "YouTube", href: "#youtube" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
  { name: "Investors", href: "https://invest.rnirealestate.com/", external: true },
];

const LinkPill = () => (
  <span className="absolute inset-0 rounded-full scale-x-0 bg-amber-500/10 group-hover:scale-x-100 transition-transform duration-300"></span>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false); // 👈 NEW

  const navigate = useNavigate();

  useEffect(() => {
    // Scroll Listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 3000);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const handlePropertyClick = (path) => {
    navigate(`/properties/${path}`);
    setPropertyOpen(false);
    setIsMobileMenuOpen(false);
  };

  // 👇 When scrolled text color changes
  const navTextColor = isScrolled ? "text-gray-800" : "text-gray-100";
  const iconColor = isScrolled ? "text-black" : "text-white";

  return (
    <>
      <AnimatePresence>
        {showWelcome && user && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed top-5 right-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-2xl z-[999]"
          >
            Welcome back,{" "}
            <span className="font-bold">{user.name.split(" ")[0]}</span>{" "}
            <Star size={18} className="inline-block" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -40 }}
        animate={{ y: isScrolled ? 5 : 0 }} // 👈 Moves slightly down on scroll
        className={`fixed top-0 w-full z-50 transition-all duration-300 
          ${isScrolled
            ? "bg-white backdrop-blur-lg shadow-lg border-b border-gray-200"
            : "bg-transparent backdrop-blur-none"
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <motion.a href="/" className="flex items-center gap-2">
              <motion.img
                src={logo}
                alt="Logo"
                className={`h-14 transition-all ${isScrolled ? "invert-0" : "invert"}`}
                whileHover={{ scale: 1.1, rotate: 4 }}
              />
            </motion.a>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-6">

              {/* Properties Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-semibold py-2 px-3 rounded-full transition
                    ${propertyOpen
                      ? "bg-amber-600 text-gray-900"
                      : isScrolled
                        ? "text-gray-800 hover:bg-amber-600 hover:text-gray-900"
                        : "text-white hover:bg-amber-600 hover:text-gray-900"} `}
                >
                  Properties
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${iconColor}`}
                    style={{ transform: propertyOpen ? "rotate(180deg)" : "" }}
                  />
                </button>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {propertyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute left-0 mt-4 w-[340px] rounded-2xl bg-gray-800 text-white border border-gray-700 shadow-xl overflow-hidden"
                    >
                      <div className="px-5 py-3 bg-gray-900 text-amber-500 font-bold text-lg border-b border-amber-500/20">
                        Explore Real Estate
                      </div>
                      <div className="grid grid-cols-1 divide-y divide-gray-700 p-2">
                        {propertyItems.map((item, i) => (
                          <motion.button
                            key={item.label}
                            transition={{ delay: i * 0.03 }}
                            onClick={() => handlePropertyClick(item.path)}
                            className="w-full flex items-center gap-4 px-3 py-3 hover:bg-gray-700 hover:text-amber-300 transition"
                          >
                            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-900 text-amber-500">
                              {item.icon}
                            </div>
                            <span className="font-medium">{item.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Links */}
              {navLinks.map((link) =>
                link.external ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative font-medium group px-3 py-2 rounded-full ${navTextColor}`}
                  >
                    <LinkPill />
                    <span className="relative z-10 font-bold">{link.name}</span>
                  </motion.a>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`relative font-medium group px-3 py-2 rounded-full ${navTextColor}`}
                  >
                    <LinkPill />
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                )
              )}

              {/* Login / Logout */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className={`px-5 py-2 rounded-full flex gap-2 font-semibold
                    ${isScrolled ? "bg-red-600 text-white" : "bg-red-700 text-white"}`}
                >
                  <LogOut size={18} /> Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className={`px-5 py-2 rounded-full flex gap-2 font-bold
                    ${isScrolled
                      ? "bg-amber-500 text-gray-900"
                      : "bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900"
                    }`}
                >
                  <LogIn size={18} /> Login
                </button>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${iconColor} lg:hidden p-2`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
      {/* Mobile Menu */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="lg:hidden fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-gray-900 z-[9999] shadow-2xl flex flex-col"
    >
      {/* Header inside menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
        <img src={logo} alt="logo" className="h-10 invert" />
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <X size={28} className="text-white" />
        </button>
      </div>

      {/* Scroll Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">

        <p className="text-lg font-bold text-amber-400 mb-3">Properties</p>

        {/* Properties List */}
        <div className="space-y-2">
          {propertyItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handlePropertyClick(item.path)}
              className="w-full flex items-center gap-3 py-3 text-gray-200 
                bg-gray-800/40 rounded-lg px-3 hover:bg-gray-700/70 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-700"></div>

        {/* Navigation Links */}
        <div className="space-y-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-200 font-medium hover:text-amber-400"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-200 font-medium hover:text-amber-400"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>

      {/* Footer Login/Logout Button */}
      <div className="px-6 pb-6">
        {user ? (
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded-full font-bold flex items-center justify-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 
              text-gray-900 py-3 rounded-full font-bold flex items-center justify-center gap-2"
          >
            <LogIn size={18} /> Login
          </button>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </motion.header>
    </>
  );
}
