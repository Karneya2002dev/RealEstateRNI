// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function AnimatedHeadline() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start center", "end start"],
//   });

//   // Move text from center → left smoothly
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   return (
//     <section
//       ref={sectionRef}
//       className="absoulte h-[100vh] left-[40%] w-full bg-white flex items-center overflow-hidden"
//     >
//       <motion.h1
//         style={{ x, opacity }}
//         className="flex items-center gap-6 font-extrabold leading-none text-black 
//                    whitespace-nowrap text-[18vw] sm:text-[16vw] lg:text-[10vw] px-10"
//       >
//         <span>Design</span>

//         {/* Pill */}
//         <span
//           className="flex items-center justify-center rounded-full 
//                      bg-[#f3f3f3] h-[14vw] w-[14vw] sm:h-[10vw] sm:w-[10vw] lg:h-[6vw] lg:w-[6vw]"
//         >
//           <span className="text-[8vw] sm:text-[6vw] lg:text-[3vw] font-bold">✱</span>
//         </span>

//         <span className="text-gray-300">that</span>
//         <span>matters</span>
//       </motion.h1>
//     </section>
//   );
// }


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Pages/Header'
import SplashScreen from './Component/Pages/Splash'
import Login from './Component/Pages/Login'
import Register from './Component/Pages/Register'
import Locations from './Component/Pages/Locations'
import LocationDetails from './Component/Pages/LocationDetails'
import ProjectDetailPage from './Component/Pages/ProjectDetails'
import AvailabilityPage from './Component/Availability'
import AgentRegister from './Component/AgentRegister'
import BuilderRegister from './Component/BuilderRegister'

const App = () => {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<SplashScreen />} />
    <Route path='/home' element={<Home />} />
    <Route path='/login' element={<Login />} />
  <Route path="/register/agent" element={<AgentRegister />} />
    <Route path="/register/builder" element={<BuilderRegister />} />
    <Route path='/location' element={<Locations/>} />
    <Route path="/locations/:slug" element={<LocationDetails />} />
    <Route path="/project/:id" element={<ProjectDetailPage />} />
 

<Route path="/availability/:id" element={<AvailabilityPage />} />

   </Routes>
   
   </>
  )
}

export default App