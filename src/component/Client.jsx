import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/client.css'
import lt from '../assets/lt.png'
import nrp from '../assets/NRP.png'
import thartius from '../assets/thartius.jpeg'
import gkaps from '../assets/gkaps.jpeg'

function Client() {
  return (
    <div className="slider4 container">
        <center className='cen-client'>
            <h1 className='h-client'>Clients</h1>
        </center>
	<div className="slide-track1 row">
        
        <div className="col-md-3 col-lg-3 col-sm-12">
        <NavLink to={`https://www.larsentoubro.com`} className="nav-link">
        <div className="slide4">
			<img src={lt} height="100" width="250" alt="l&t" />
		</div>
        </NavLink>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
        <NavLink to={`https://www.nrpprojects.in`} className="nav-link">
        <div className="slide4">
			<img src={nrp} height="100" width="250" alt="nrp" /> 
		</div>
        </NavLink>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12">
        <NavLink to={`https://thartius.com/`} className="nav-link">
        <div className="slide4">
			<img src={thartius} height="100" width="250" alt="thertius" />
		</div>
        </NavLink>
        </div>
		<div className="col-md-3 col-lg-3 col-sm-12">
        <NavLink to={`/client`} className="nav-link">
        <div className="slide4">
			<img src={gkaps} height="100" width="250" alt="GKAPS" /> 
		</div>
        </NavLink>
        </div>
	</div>
</div>
  )
}

export default Client
