import React from 'react'
import './css/footer.css'
import { NavLink } from 'react-router-dom'
import logo from '../../src/assets/AWElogo.png'

function Footer() {
  return (
        <div className="container1">
            <div className="container footer-heading">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 footer-div footer-div1">
              {/* <h1 className='logo2'>hi</h1> */}
              <img src={logo} alt="Logo" className='footer-img ' width={300} height={150} />
              <h1>ATTHI ENGINEERING WORKS</h1>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 footer-div footer-link">
              <h5 className='link-h'>Quick Links</h5>
              <ul className='link-ul'>
                <li>
                  <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                </li>
                <li>
                  <NavLink to={`/service`} className="nav-link">Services</NavLink>
                </li>
                <li>
                  <NavLink to={`/ongoing`} className="nav-link">Ongoing Projects</NavLink>
                </li>
                <li>
                  <NavLink to={`/completed`} className="nav-link">Completed Projects</NavLink>
                </li>
                <li>
                  <NavLink to={`/client`} className="nav-link">Clients</NavLink>
                </li>
                <li>
                  <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-6 footer-div footer-link support-sec">
                
                    <h5 className='link-h link-hs '>Support</h5>
                    <div className='link-support'>
                      <span className='link-span'><i className="bi bi-telephone-fill  link-i"></i>+91-9486285049</span>
                      
                      <br /><br />
                      <span className='link-span '><i className="bi bi-geo-alt-fill  link-i"></i> 9/28-3,<br /> West Street,<br /> Koodankulam,<br />
                       Radhapuram Tk,<br /> Tirunelveli Dist,<br /> Tamilnadu,<br /> Pin-627106</span>
                       <br /><br />
                       <span className='link-span link-spangeo'><i className="bi bi-envelope-fill  link-i"></i> atthiengineeringworks@gmail.com</span>
                    </div>
                
            </div>
            <div className='social-link'>
              <span className='social-span'><NavLink to={"whatsapp://send?text=Hi!&phone=9486285049"} className="bi bi-whatsapp" ></NavLink></span>
              <span className='social-span'><NavLink to={"mailto:atthiengineeringworks@gmail.com"} className="bi bi-envelope-fill" ></NavLink></span>
              
          </div>
        </div>
        </div>
        <span className='social-span'><h6 className=' copyright me-5'>Copyright © 2023 ATTHI ENGINEERING WORKS. All Rights Reserved.</h6></span>
        <h6 className='text-light ms-5 ps-5'><NavLink to={"https://sidkeinwebhub.com/"} className='text-light text-decoration-none'>Powered by Sidkein Webhub</NavLink></h6>
        <br />
        </div>
  )
}

export default Footer
