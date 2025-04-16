import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Guides from './components/Guides/Guides'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Story from './components/Story/Story'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Guides/>
      <Story/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
