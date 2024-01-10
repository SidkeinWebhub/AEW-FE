import React, { useEffect} from 'react'
import Services from '../Services';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';

function ServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Navbar/>
        <Navbar2/>
        <Services/>
        <Footer/>
    </>
  )
}

export default ServicePage
