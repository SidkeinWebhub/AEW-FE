import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
import logo from '../../src/assets/AWElogo.png'

function Navbar() {
  return (
    <nav className='nav1 navbar navbar-expand-md navbar-light '>
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">
                {/* <span className="logo"><img src={logo} alt="logo" className=' logo1'  />
                </span> */}
                <object data={logo} className=' logo1' id='logo1' type="image/svg+xml" aria-label='logo'></object>
            </NavLink>

            <div className=" navbar-collapse justify-content-end " >
                <ul className="navbar-nav align-items-center ">
                    <li className="nav-item me-5 nav-list">
                        <NavLink to={`tel://9486285049`} className="nav-link bi bi-telephone-fill  link-i nav-list1" >+91-9486285049</NavLink>
                    </li>
                   
                    <li className="nav-item me-5 nav-list">
                        <NavLink to={`mailto:atthiengineeringworks@gmail.com`} className="nav-link bi bi-envelope-fill  link-i nav-list1">   atthiengineeringworks@gmail.com</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
