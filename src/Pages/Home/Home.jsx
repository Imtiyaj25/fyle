import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import Quality from '../../Components/Quality/Quality'
import Services from '../../Components/Services/Services'
import GrowthSection from '../../Components/Growth/Growth'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
        <Hero />
        <Services />
        <Quality />
        <GrowthSection />
        <Footer />
    </div>
  )
}

export default Home