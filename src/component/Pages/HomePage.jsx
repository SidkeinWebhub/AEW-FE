import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import Banner from '../Banner'
import Specializations from '../Specializations'
import About from '../About'
import Values from '../Values'
import Contact from '../Contact'
import Footer from '../Footer'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Navbar/>
        <Navbar2/>
        <Banner/>
        <Specializations/>
        <About/>
        <Values/>
        <Contact/>
        <Footer/>
        <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    </>
  )
}

export default HomePage
