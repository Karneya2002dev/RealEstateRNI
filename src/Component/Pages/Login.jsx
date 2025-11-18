import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import logo from "../../assets/logoo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      if (email === "vs1606@gmail.com" && password === "Vs1606") {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    }, 2000); // 2s delay
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      {/* Full Page Loader */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 z-50 flex flex-col items-center justify-center">
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <p className="mt-4 text-blue-700 font-semibold">Logging in...</p>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full border border-gray-100 relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">Login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-400 transition"
            disabled={loading}
          >
            <LogIn className="h-5 w-5" /> Login
          </motion.button>

          <div className="text-center text-sm text-gray-600 mt-2">
            Don't have an account?
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/register/agent")}
              className="cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-medium hover:bg-blue-200 transition"
            >
              Register as Agent
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/register/builder")}
              className="cursor-pointer bg-green-100 text-green-700 px-4 py-2 rounded-xl font-medium hover:bg-green-200 transition"
            >
              Register as Builder
            </motion.span>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
