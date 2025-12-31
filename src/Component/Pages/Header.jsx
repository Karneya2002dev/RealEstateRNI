import { useState, useEffect } from "react";
import {
  Menu, X, LogIn, LogOut, ChevronDown,
  Home, Building2, Landmark, Warehouse, Rocket, Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoo.png";
/* Property Items */
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
  <span className="absolute inset-0 rounded-full scale-x-0 bg-red-500/10 group-hover:scale-x-100 transition-transform duration-300"></span>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [mobilePropertyOpen, setMobilePropertyOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 3000);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    setIsMobileMenuOpen(false);
    setMobilePropertyOpen(false);
  };

  const handlePropertyClick = (path) => {
    navigate(`/properties/${path}`);
    setPropertyOpen(false);
    setIsMobileMenuOpen(false);
    setMobilePropertyOpen(false);
  };

  // UI States
  const navTextColor = "text-gray-800";
  const iconColor = "text-gray-800";
  const propertyBtnColor = propertyOpen
    ? "bg-red-500 text-white"
    : "text-gray-800 bg-white border border-gray-100 hover:bg-gray-50";

  return (
    <>
      {/* Welcome Toast */}
      <AnimatePresence>
        {showWelcome && user && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 bg-red-600 text-white px-6 py-3 rounded-xl shadow-2xl z-[9999] flex items-center gap-2"
          >
            Welcome back, <b>{user.name.split(" ")[0]}</b>{" "}
            <Star size={16} fill="white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          isScrolled ? "py-2 shadow-md" : "py-3 shadow-sm"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <motion.div 
               onClick={() => navigate("/")}
               className="cursor-pointer"
               whileHover={{ scale: 1.05 }}
            >
              <img src={logo} className="h-12 md:h-14 object-contain" alt="RNI Logo" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">

              {/* Properties Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-5 py-2 rounded-full font-bold transition-all ${propertyBtnColor}`}
                >
                  Properties
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${propertyOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {propertyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-[320px] rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-gray-50/50 text-red-600 text-xs font-black uppercase tracking-widest border-b border-gray-100">
                        Explore Categories
                      </div>
                      <div className="p-2 grid grid-cols-1">
                        {propertyItems.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handlePropertyClick(item.path)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-xl transition-all group text-sm font-semibold"
                          >
                            <div className="h-8 w-8 bg-gray-100 group-hover:bg-white rounded-lg flex items-center justify-center text-gray-500 group-hover:text-red-500 transition-colors shadow-sm">
                              {item.icon}
                            </div>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nav Links */}
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    className={`relative group px-4 py-2 rounded-full text-sm font-bold ${navTextColor} transition-colors hover:text-red-600`}
                  >
                    <LinkPill />
                    <span className="relative z-10">{link.name}</span>
                  </a>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="ml-2 border-l pl-4 border-gray-100">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="bg-gray-100 text-gray-800 hover:bg-red-600 hover:text-white px-5 py-2 rounded-full flex items-center gap-2 font-bold transition-all shadow-sm"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center gap-2 font-bold transition-all shadow-md hover:shadow-red-200 hover:bg-red-700"
                  >
                    <LogIn size={16} /> Login
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="flex flex-col p-4 gap-2">
                  <button
                    onClick={() => setMobilePropertyOpen(!mobilePropertyOpen)}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl font-bold transition-colors ${mobilePropertyOpen ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-800'}`}
                  >
                    Properties <ChevronDown className={`h-4 w-4 transition-transform ${mobilePropertyOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobilePropertyOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 gap-1 pl-4 py-2"
                      >
                        {propertyItems.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handlePropertyClick(item.path)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-semibold"
                          >
                            <span className="text-red-500">{item.icon}</span>
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      className="px-4 py-3 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition"
                    >
                      {link.name}
                    </a>
                  ))}

                  <div className="mt-2 pt-4 border-t border-gray-100">
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-800 rounded-xl font-bold"
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg"
                      >
                        <LogIn size={18} /> Login
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}