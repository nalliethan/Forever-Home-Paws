import React, { useEffect } from 'react'
import AdoptPages from './pages/AdoptPages/AdoptPages'
import { Routes, Route, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Home from './pages/Home/Home'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.state?.scrollTo === "adopt"){
      scroller.scrollTo('adopt', {
        smooth: true,
        offset: -60,
        duration: 0,
      })
    }
  },[location]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/adopt/:id" element={<AdoptPages />} />
    </Routes>
      
  )
}

export default App
