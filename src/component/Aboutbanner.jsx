import React from 'react'
import './css/aboutbanner.css'
import person from '../assets/person.png'

function Aboutbanner() {
   
   
  return (
    <>
    <div>
        <div className="continer aboutbg">
        <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 text-center">
                <h1 className='aboutban'>ABOUT US</h1>
                <p className='aboutbanp'>
                    Don't Limit Your Challenges - Challenge Your Limits. <hr/>
                Welcome to ATTHI ENGINEERING WORKS, where precision meets passion, and innovation is the cornerstone of our success. Since our establishment in 2012, we have been at the forefront of the engineering industry, delivering excellence in every project and building lasting partnerships.
                </p>
                
                <p className='aboutbanp'>In 2012, a group of visionary people came together to create ATTHI ENGINEERING WORKS, driven by a shared commitment to redefine the standards of engineering excellence. What started as a modest endeavor has now evolved into a leading force in the industry, known for our expertise, reliability, and unwavering dedication to client satisfaction.</p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
            <img className='person-img' src={person} alt="" height="25%" />
            </div>
            <div className="col-md-12 col-lg-12 col-sm-12 text-center">
                <h1 className='aboutban aboutban1'>Our Mission</h1>
                <p className='aboutbanp aboutbanp1'>
                Empowering Progress, Engineering Excellence <hr/>
                At ATTHI ENGINEERING WORKS, our mission is to be the driving force behind progress, providing innovative engineering solutions that empower our clients and contribute to the advancement of industries. We are committed to:
                </p>
                
                <ul className='aboutbanp aboutbanp1'>
                    <li><span >Excellence:</span> Striving for excellence in every facet of our work, from precision engineering to client relationships. We aim to set new standards and consistently surpass expectations.</li>
                    <li><span>Innovation:</span> Embracing a culture of continuous innovation, we seek creative solutions to complex challenges, pushing the boundaries of what's possible in the engineering realm.</li>
                    <li><span>Safety:</span> Prioritizing the safety and well-being of our team, clients, and the communities we serve. We adhere to the highest safety standards, creating secure environments for everyone involved in our projects.</li>
                    <li><span>Client Success:</span> Placing our clients at the forefront, we are dedicated to understanding their unique needs and delivering tailor-made solutions that contribute to their success and sustainability.</li>
                    <li><span>Sustainability:</span> Integrating sustainable practices into our engineering processes, minimizing environmental impact, and contributing to a greener and more sustainable future.</li>
                </ul>
                
            </div>
            <div className="col-md-12 col-lg-12 col-sm-12 text-center">
                <h1 className='aboutban aboutban2'>Our Vision</h1>
                <p className='aboutbanp aboutbanp2'>
                Pioneering Tomorrow's Engineering Landscape. <hr/>
                At ATTHI ENGINEERING WORKS, our vision is to be a trailblazer in the engineering industry, leading the way in innovation, sustainability, and client-centric solutions. We aspire to:
                </p>
                
                <ul className='aboutbanp aboutbanp2'>
                    <li><span>Innovate Continuously:</span> Strive for continuous innovation, pushing the boundaries of engineering possibilities and pioneering cutting-edge solutions that shape the future.</li>
                    <li><span>Inspire Excellence:</span> Set the standard for excellence in engineering, inspiring our team and industry peers to achieve new heights in quality, precision, and client satisfaction.</li>
                    <li><span>Sustainably Transform:</span> Drive the transformation toward sustainable engineering practices, contributing to a world where infrastructure is not only robust but also environmentally responsible.</li>
                    <li><span>Be the Partner of Choice:</span> Earn the reputation as the preferred engineering partner, known for our reliability, integrity, and the ability to turn challenges into opportunities for success.</li>
                    <li><span>Foster a Culture of Growth:</span> Cultivate a work environment that encourages continuous learning, creativity, and collaboration, empowering our team to reach their full potential.</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div className="container">
    <div className="row">
        <center className='approach'>
            <h1>Our Approach</h1>
        </center>   
    <div className="tilesWrap-col col-md-6 col-lg-6 col-sm-12">
        <ul className="tilesWrap">
        
        <li>
            <h2>01</h2>
            <h3>Client-Centric Focus</h3>
            <p>
            Your success is our priority. We take the time to understand your unique needs, challenges, and goals, ensuring that every solution we provide is tailored to meet and exceed your expectations.
            </p>
            {/* <NavLink to={`/service`} className='nav-link'>
                <button>Read more</button>
            </NavLink> */}
        </li>
        </ul>
    </div>
    <div className="tilesWrap-col col-md-6 col-lg-6 col-sm-12">
        <ul className="tilesWrap">
        <li>
            <h2>02</h2>
            <h3>Collaboration and Expertise</h3>
            <p>
            We believe in the power of collaboration. By combining our expertise with your vision, we create synergies that lead to innovative and sustainable engineering solutions.
            </p>
            {/* <NavLink to={`/service`} className='nav-link'>
                <button>Read more</button>
            </NavLink> */}
        </li>
        </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Aboutbanner
