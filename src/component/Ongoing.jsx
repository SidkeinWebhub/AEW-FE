import React, { useEffect, useRef } from 'react'
import './css/ongoing.css'

function Ongoing() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const { top, bottom } = servicesRef.current.getBoundingClientRect();

      const services = Array.from(servicesRef.current.children);

      if (top <= window.innerHeight && bottom >= 0) {
        for (let i = 0; i < services.length; i++) {
          setTimeout(() => {
            services[i].classList.add("active");
          }, 150 * i);
        }
      } else {
        services.forEach((service) => service.classList.remove("active"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App1">
      <div className="parallax1">
      </div>

      <center>
        <h1 className='h-client6'>Ongoing  Projects</h1>
      </center>

      <div className="container">
        <div className="row services" ref={servicesRef}>
          <div className="col-md-12 col-lg-6 col-sm-12  service" >
                <div className="icon">
                  <h1>🚧</h1>
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-12 col-lg-6 col-sm-12" >
                    <img src={pro1} alt="project" width="100%" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction 3 Nos 79 Meter Dia double deck floating roof crude oil tank at New MPPL at IOCL Mundra Pipeline division with sprinkler and foam system.</p>
                    <p><h4>Client</h4>NRP Projects Pvt Ltd</p>
                    <p><h4>Project value</h4>4 C </p>
                    <p><h4>Duration</h4>18 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12  service" >
                <div className="icon">
                  <h1>🚧</h1>
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-12 col-lg-6 col-sm-12" >
                    <img src={pro2} alt="project" width="100%" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction 6 nos of 12 Meter dia vertical tanks n with sprinkler and foam system at Lucknow airport </p>
                    <p><h4>Client</h4>NRP Projects Pvt Ltd</p>
                    <p><h4>Project value</h4>1 C </p>
                    <p><h4>Duration</h4>8 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12  service" >
                <div className="icon">
                  <h1>🚧</h1>
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-12 col-lg-6 col-sm-12" >
                    <img src={pro3} alt="project"  width="100%" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction 6 nos of 12 Meter dia vertical tanks n with sprinkler and foam system at Ahmadabad airport.</p>
                    <p><h4>Client</h4>NRP Projects Pvt Ltd</p>
                    <p><h4>Project value</h4>1 C </p>
                    <p><h4>Duration</h4>8 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Ongoing
