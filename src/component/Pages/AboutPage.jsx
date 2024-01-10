import React,{ useEffect} from 'react'
import Aboutbanner from '../Aboutbanner'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import Footer from '../Footer'

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <Navbar/>
    <Navbar2/>
    <Aboutbanner/>
    <Footer/>
   </>
  )
}

export default AboutPage
