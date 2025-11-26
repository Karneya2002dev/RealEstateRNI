import React from 'react'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Services from './Pages/Service'
// import Platforms from './Pages/Platform'
import Gallery from './Pages/Gallery'
import Testimonials from './Pages/Testimonal'
import FAQ from './Pages/FAQ'
import Footer from './Pages/Footer'
import AgentListings from './Pages/AgentListings'
import OurLocations from './Pages/Locations'

const Home = () => {
  return (
    <>
    <Hero />
    <OurLocations />
    <About />
    <Services />
    {/* <Platforms /> */}
    <Gallery />
    <Testimonials />
    <AgentListings />
    <FAQ />
    <Footer />



    </>
  )
}

export default Home