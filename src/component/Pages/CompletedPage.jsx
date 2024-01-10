import React,{ useEffect} from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import Completed from '../Completed';
import Footer from '../Footer';

function CompletedPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Navbar/>
        <Navbar2/>
        <Completed/>
        <Footer/>
    </>
  )
}

export default CompletedPage
