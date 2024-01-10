import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import Client from '../Client';
import Footer from '../Footer';

function ClientPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <Client/>
    <Footer/>
    </>
  )
}

export default ClientPage
