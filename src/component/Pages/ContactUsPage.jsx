import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import ContactDetails from '../ContactDetails';
import Contact from '../Contact';
import Map from '../Map';
import Footer from '../Footer';

function ContactUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
   <>
    <Navbar/>
    <Navbar2/>
    <ContactDetails/>
    <Contact/>
    <Map/>
    <Footer/>
   </>
  )
}

export default ContactUsPage
