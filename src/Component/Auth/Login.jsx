import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, ShieldCheck, Globe } from "lucide-react";
import logo from "../../assets/logoo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className=" bg-[#F1F5F4] flex items-center  justify-center p-0 sm:p-4 font-sans antialiased text-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white sm:rounded-[2rem] relative top-10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[100vh] sm:min-h-[600px]"
      >
        {/* LEFT PANEL: Branding & Visuals */}
        <div className="md:w-[38%]  bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full -ml-16 -mb-16" />

          <div className="relative z-10 flex flex-col items-center relative top-16 text-center">
            <motion.img 
              whileHover={{ rotate: -5 }}
              src={logo} 
              alt="Logo" 
              className="w-20 mb-12 sm:w-24 invert" 
            />
            <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-3">
              Manage your <br />
              <span className="text-blue-400">Property Vision.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Enter the ecosystem to manage listings, track leads, and close deals faster.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: The Form */}
        <div className="flex-1 p-4 lg:p-6 flex flex-col  bg-white relative top-10 ">
          <div className="max-w-md mx-auto w-full">
            
            <header className="mb-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Login</h3>
              <p className="text-slate-400 mt-2 text-sm font-medium">Welcome back! Please enter your details.</p>
            </header>

            <form onSubmit={handleLogin} className="space-y-2 relative">
              {/* INPUT: EMAIL */}
              <div className="space-y-2 group">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-blue-600 transition-colors">
                   Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 text-slate-900 font-semibold text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all placeholder:text-slate-300 placeholder:font-normal"
                  required
                />
              </div>

              {/* INPUT: PASSWORD */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    Password
                  </label>
                  <button type="button" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-tighter">
                    Forgot Key?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 text-slate-900 font-semibold text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all placeholder:text-slate-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      />
                    ) : (
                      <motion.div key="text" className="flex items-center gap-2">
                        <LogIn size={18} /> Log in
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </form>

            {/* FOOTER */}
            <footer className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Don't have an account?</p>
              <Link
                to="/RegisterForm"
                className="text-xs font-black text-blue-600 bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest"
              >
                Join Now
              </Link>
            </footer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;