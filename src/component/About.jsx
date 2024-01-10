import React from 'react'
import tank from '../../src/assets/tank.svg'
import './css/about.css'

function About() {
  return (
    <div className="container about">
        <div className="row">
            <center className='aboutH1'>
                <h1 > About Us</h1>
            </center>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="loader1">
                    <p className="text">
                        {/* Sidkein WebHub... */}
                        <img className='tank-img' src={tank} alt="about" height={'450px'}  width={'90%'}/>
                    </p>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 about-content'>
                
                <p className='aboutp'>At ATTHI ENGINEERING WORKS, we are more than just company; we are architects of progress, builders of innovation, and guardians of safety. Established with a vision to redefine engineering excellence, our journey has been marked by a steadfast commitment to quality, precision, and client satisfaction.

                </p>
                <h3>Our Mission:</h3>
                <p className='aboutp'>To be the engineering partner of choice, consistently exceeding expectations and contributing to the success and sustainability of our clients' ventures.</p>
            </div>
        </div>
    </div>
  )
}

export default About
