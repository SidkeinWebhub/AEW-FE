import React from 'react'
import './css/contactBody.css'
// import bg from '../assets/oil-tank.png'

function ContactDetails() {
  return (
    <div className="container  card-contact1">
        {/* <img src={bg} alt="" /> */}
        <center className='mt-5 card-contact'>
            <h1 className='h-client1'>Contact Us</h1>    
        </center>  
        <div className="row"> 
         
            <div className="card-outer1 col-lg-4 col-md-6 col-sm-12 glassCard mb-5">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Phone Number</h6>
                        <i className='text-center'>+91-9486285049</i>
                    </div>
                </div>
            </div>
            
            <div className="card-outer1 col-lg-4 col-md-6 col-sm-12 glassCard mb-5">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Email Address</h6>
                        <i className='text-center email1'>atthiengineeringworks@gmail.com</i>
                    </div>
                </div>
            </div>
            <div className="card-outer1 col-lg-4 col-md-6 col-sm-12 glassCard mb-5">
                <div className="card1">
                    
                    <div className="card-inner1">
                        <h6 className='display-6 text-center'>Location</h6>
                        <i className='text-center'>9/28-3, West Street, Koodankulam,
                        Radhapuram Tk, Tirunelveli Dist, Tamilnadu,
                        Pin-627106</i>
                    </div>
                </div>
            </div>

        </div>
    </div>

  )
}

export default ContactDetails
