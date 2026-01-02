

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Pages/Header'
import SplashScreen from './Component/Pages/Splash'
import Login from './Component/Auth/Login'
import Register from './Component/Pages/Register'
import Locations from './Component/Pages/Locations'
import LocationDetails from './Component/Pages/LocationDetails'
import ProjectDetailPage from './Component/Pages/ProjectDetails'
import AvailabilityPage from './Component/Availability'
import AgentRegister from './Component/AgentRegister'
import BuilderRegister from './Component/BuilderRegister'
import PropertyPage from './Component/Pages/PropertyPages'
import PropertyListing from './Component/Pages/PropertyCategorySlider'
import PropertyDetails from "./Component/Pages/PropertiesPage";
import RegisterForm from './Component/Auth/RegisterForm'
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
    <Route path="properties" element={<PropertyListing />} />
    <Route path='/location' element={<Locations/>} />
    <Route path="/locations/:slug" element={<LocationDetails />} />
    <Route path="/project/:id" element={<ProjectDetailPage />} />
    <Route path="/property/:id" element={<PropertyDetails />} />  
    <Route path="/availability/:id" element={<AvailabilityPage />} />
    <Route path="/Registerform" element={<RegisterForm />} />
     <Route path="/properties/:propertyType" element={<PropertyPage />} />

   </Routes>
   
   </>
  )
}

export default App


// import React from 'react'
// import Homee from './Component/Redbriq/Homee'

// const App = () => {
//   return (
//    <>
//    <Homee />
   
//    </>
//   )
// }

// export default App