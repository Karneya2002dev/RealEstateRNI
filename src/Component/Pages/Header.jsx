import { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, ChevronDown, Home, Building2, Landmark, Warehouse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoo.png";

/* Property Items with Icons */
const propertyItems = [
  { label: "NEW FLATS", icon: <Home size={16} />, path: "new-flats" },
  { label: "OLD USED FLATS", icon: <Building2 size={16} />, path: "old-flats" },
  { label: "PLOT - Residential", icon: <Landmark size={16} />, path: "plot-residential" },
  { label: "PLOT - Commercial", icon: <Landmark size={16} />, path: "plot-commercial" },
  { label: "RESIDENTIAL - NEW VILLAS", icon: <Home size={16} />, path: "new-villas" },
  { label: "Residential - Old BUILDING", icon: <Warehouse size={16} />, path: "old-buildings" },
  { label: "Joint Venture", icon: <Warehouse size={16} />, path: "joint-venture" },
  { label: "OLD VILLAS", icon: <Home size={16} />, path: "old-villas" },
  { label: "Rental / LEASE", icon: <Building2 size={16} />, path: "rental-lease" },
];

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Forum", href: "#forum" },
  { name: "YouTube", href: "#youtube" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
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
  };

  const handlePropertyClick = (path) => {
    navigate(`/properties/${path}`);
    setPropertyOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 🎉 Floating Welcome Notification */}
      <AnimatePresence>
        {showWelcome && user && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed top-5 right-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl shadow-2xl z-[999]"
          >
            Welcome back, <span className="font-bold">{user.name.split(" ")[0]}</span> 🎉
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-xl border-b border-gray-200"
            : "bg-white/30 backdrop-blur-lg border-b border-white/40"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <motion.img
                whileHover={{ scale: 1.1, rotate: 4 }}
                src={logo}
                alt="Logo"
                className="h-14 w-auto"
              />
            </motion.a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">

              {/* Properties Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <button className="flex items-center gap-1 font-semibold text-gray-800 hover:text-blue-600 transition">
                  Properties <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {propertyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="
                        absolute left-0 mt-4 w-[340px] 
                        rounded-2xl shadow-2xl overflow-hidden
                        backdrop-blur-xl bg-white/80 border border-white/30
                      "
                    >
                      <div className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg">
                        Explore Properties
                      </div>

                      <div className="grid grid-cols-1 divide-y divide-gray-200">
                        {propertyItems.map((item, i) => (
                          <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => handlePropertyClick(item.path)}
                            className="
                              w-full flex items-center gap-4
                              px-5 py-3 text-left 
                              hover:bg-blue-50/70 hover:text-blue-700 
                              transition-all group
                            "
                          >
                            <div
                              className="
                                h-10 w-10 flex items-center justify-center 
                                rounded-xl bg-blue-100 text-blue-700 
                                group-hover:bg-blue-600 group-hover:text-white 
                                transition
                              "
                            >
                              {item.icon}
                            </div>
                            <span className="text-gray-800 font-medium group-hover:font-semibold">
                              {item.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Normal Links */}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative font-medium text-gray-900 group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all"></span>
                </motion.a>
              ))}

              {/* Auth Section */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full shadow-md hover:shadow-blue-300 flex items-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full shadow-md hover:shadow-blue-300 flex items-center gap-2"
                >
                  <LogIn size={18} /> Login
                </button>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* MOBILE SLIDE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 90 }}
              className="lg:hidden bg-white shadow-xl border-t px-6 py-4 space-y-3"
            >
              <p className="font-semibold text-gray-900">Properties</p>
              {propertyItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handlePropertyClick(item.path)}
                  className="w-full flex items-center gap-3 py-2 text-gray-700 hover:bg-gray-100 px-2 rounded"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}

              <hr className="my-3" />

              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block py-2 font-medium">
                  {link.name}
                </a>
              ))}

              <hr className="my-3" />

              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full bg-blue-600 text-white py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <LogOut size={18} /> Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="w-full bg-blue-600 text-white py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <LogIn size={18} /> Login
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
