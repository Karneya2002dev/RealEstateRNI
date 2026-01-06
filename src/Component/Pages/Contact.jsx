import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiHome,
  FiMessageSquare,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const InnovativeForm = () => {

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyId: "",
    location: "",
    budget: "",
    message: "",
    contactMethod: "WhatsApp",
  });
  const navigate=useNavigate();
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const next = () => setStep((s) => Math.min(s + 1, 4));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white px-4 py-10 md:px-8 font-sans selection:bg-cyan-400">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-4 rounded-3xl h-full flex flex-col ">
            <div>
              <div className="w-12 h-12 bg-cyan-400 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <FiHome className="text-2xl text-black" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                Find your <span className="text-cyan-400">perfect space</span>
              </h1>
              <p className="text-slate-400">
                Smart routing connects you with the best agent instantly.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Agents Online • 3 Local
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                  Progress
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">
                    {Math.round((step / 4) * 100)}%
                  </span>
                  <span className="text-cyan-400 text-xs">
                    Step {step} / 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 min-h-[560px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-8">
                      <Header icon={<FiUser />} title="01 Identification" />

                      <div className="grid md:grid-cols-1 gap-6">
                        <input
                          name="name"
                          placeholder="Full Name"
                          onChange={handleChange}
                          className="ultra-input p-2 rounded-xl  "
                          required
                        />
                        <input
                          name="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          className="ultra-input p-2 rounded-xl "
                          required
                        />
                      </div>

                      <input
                        name="phone"
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        className="ultra-input p-2 rounded-xl w-[70%] "
                        required
                      />
                    <br/>
                      <NextButton onClick={next} label="Continue" />
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <Header icon={<FiHome />} title="02 Purpose" color="purple" />

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Buy", "Rent", "Sell", "Agent", "Build", "Other"].map(
                          (opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  inquiryType: opt,
                                });
                                next();
                              }}
                              className="h-28 rounded-2xl bg-white/5 border border-white/10 
                              hover:bg-cyan-400 hover:text-black transition-all 
                              flex flex-col justify-center items-center font-semibold"
                            >
                              {opt}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <div className="space-y-8">
                      <Header
                        icon={<FiMessageSquare />}
                        title="03 Details"
                        color="emerald"
                      />

                      <div className="grid md:grid-cols-1 gap-4">
                        <input
                          name="propertyId"
                          placeholder="Property ID"
                          onChange={handleChange}
                          className="ultra-input p-2 rounded-xl"
                        />
                        <input
                          name="location"
                          placeholder="Location"
                          onChange={handleChange}
                          className="ultra-input p-2 rounded-xl"
                        />
                      </div>

                      <div className="relative">
                        <input
                          name="budget"
                          placeholder="Budget"
                          onChange={handleChange}
                          className="ultra-input p-2 rounded-xl w-full pr-10"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                          ₹
                        </span>
                      </div>

                      <NextButton onClick={next} label="Final Step" />
                    </div>
                  )}

                  {/* STEP 4 */}
                  {step === 4 && (
                    <div className="space-y-8">
                      <Header icon={<FiSend />} title="04 Message" color="orange" />

                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Additional notes..."
                        onChange={handleChange}
                        className="ultra-input resize-none p-2 rounded-xl w-full"
                      />

                      <div className="flex gap-4 flex-wrap">
                        {["WhatsApp", "Email", "Phone"].map((m) => (
                          <label key={m} className="flex-1 min-w-[120px] cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={m}
                              onChange={handleChange}
                              checked={formData.contactMethod === m}
                              className="peer hidden"
                            />
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 
                              text-center peer-checked:bg-cyan-400 peer-checked:text-black transition">
                              {m}
                            </div>
                          </label>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-5 rounded-2xl bg-cyan-400 text-black 
                        font-extrabold text-lg tracking-wide hover:brightness-110 
                        active:scale-95 transition shadow-lg"
                      >
                        SEND REQUEST
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-green-500/20 
                    text-green-500 flex items-center justify-center text-5xl">
                    <FiCheckCircle />
                  </div>
                  <h2 className="text-3xl font-bold">Message Received</h2>
                  <p className="text-slate-400">
                    We’ll contact you via {formData.contactMethod}.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

const Header = ({ icon, title }) => (
  <div className="flex items-center gap-3 text-cyan-400 uppercase tracking-widest text-sm">
    {icon} {title}
  </div>
);

const NextButton = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-3 text-xl font-semibold 
    text-cyan-400 hover:text-cyan-300 transition"
  >
    {label} <FiArrowRight />
  </button>
);

export default InnovativeForm;
