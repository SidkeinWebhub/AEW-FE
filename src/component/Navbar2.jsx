import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar2.css'

function Navbar2() {
  return (
    <nav className='nav2 navbar navbar-expand-md navbar-light '>
        <div className="container">
            {/* <NavLink to={`/`} className="navbar-brand">
                <span className="logo"><img src="/assets/logo/logo.svg" alt="" className='bg-transparent' height={150} width={300} />
                </span>
            </NavLink> */}

            <button className="navbar-toggler " data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center " id="menu">
                
                <ul className=" navbar-nav align-items-center ">
                    <li className="nav-item ms-3">
                        <NavLink to={`/`} className="nav-list nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item ms-3">
                        <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                    </li>
                    <li className="nav-item ms-3">
                        <NavLink to={`/service`} className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item ms-3 dropdown">
                        <button className="btn  dropdown-toggle" data-bs-toggle="dropdown">Projects</button>
                        {/* <a href="#" class="nav-link dropdowm-toggle" data-bs-toggle="dropdown">Projects</a> */}
                        <ul className="dropdown-menu">
                            <li><NavLink to={`/ongoing`} className="nav-link  ">Ongoing Projects</NavLink></li>
                            <li><NavLink to={`/completed`} className="nav-link ">Completed Projects</NavLink></li>
                        </ul>
                    </li>
                    {/* <li className="nav-item ms-3">
                        <NavLink to={`/`} className="nav-link">Experiences</NavLink>
                    </li> */}
                    <li className="nav-item ms-3">
                        <NavLink to={`/client`} className="nav-link">Clients</NavLink>
                    </li>
                    <li className="nav-item ms-3">
                        <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar2
