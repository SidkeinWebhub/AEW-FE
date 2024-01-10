import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import Ongoing from '../Ongoing'
import Footer from '../Footer'

function OngoingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Navbar/>
        <Navbar2/>
        <Ongoing/>
        <Footer/>
    </>
  )
}

export default OngoingPage
