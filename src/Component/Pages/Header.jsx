import { useState, useEffect } from "react";
import { Menu, X, LogIn, LogOut, CheckCircle } from "lucide-react"; // 🆕 added icon
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logoo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false); // 🆕
  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🆕 Load user and trigger welcome animation
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setShowWelcome(true); // show popup when user logs in
      setTimeout(() => setShowWelcome(false), 3000); // hide after 3s
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully");
    navigate("/login");
  };

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Forum", href: "#forum" },
    { name: "YouTube", href: "#youtube" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* 🆕 Welcome Popup Animation */}
      <AnimatePresence>
        {showWelcome && user && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 right-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 z-[1000]"
          >
            <CheckCircle className="h-5 w-5 text-white" />
            <span className="font-semibold">
              Welcome back, {user.name.split(" ")[0]} 🎉
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-lg border-b border-white/20"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={logo}
                alt="Manage My Estate logo"
                className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                whileHover={{ rotate: 8, scale: 1.1 }}
              />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-900 font-medium text-sm group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-all group-hover:w-full rounded"></span>
                </motion.a>
              ))}

              {/* Auth Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4"
              >
                {user && (
                  <span className="text-sm font-medium text-gray-700">
                    Welcome, <span className="text-blue-600">{user.name}</span> 👋
                  </span>
                )}

                {user ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-blue-300 transition"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-blue-300 transition"
                  >
                    <LogIn className="h-4 w-4" /> Login
                  </motion.button>
                )}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
