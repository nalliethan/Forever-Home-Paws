import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Adopt from '../../components/Adopt/Adopt'
import Guides from '../../components/Guides/Guides'
import Story from '../../components/Story/Story'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Adopt/>
        <Guides/>
        <Story/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
