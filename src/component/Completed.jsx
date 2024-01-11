import React,{ useEffect, useRef } from 'react'
import './css/completed.css'
import pro2 from '../assets/hyd.JPG'
import pro1 from '../assets/bihar.jpeg'
// import pro3 from '../assets/pro3.png'
// import pro5 from '../assets/pip4.jpeg'
// import pro6 from '../assets/pro6.jpeg'


function Completed() {
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
      <div className="parallax">
        
      </div>

      <center>
        <h1 className='h-client6'>Completed Projects</h1>
      </center>

      <div className="container">
        <div className="row services" ref={servicesRef}>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
                <div className="icon">
                  <h1>🚧</h1>
                </div>
                <div className="container">
                  <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro2} alt="project" width="100%" height="280px" className='mt-5'/>
                  </div>
                <div className="col-md-6 col-lg-6 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction of Vertical storage tanks (CFIVR) 38 Meter Dia 2 Nos, 40 Meter Dia 2 Nos, 20 Meter Dia 1 Nos, 14 Meter Dia 3 Nos with all sprinkler system, foam system and IFR Installation at IOCL Marketing Terminal Hyderabad.</p>
                    <p><h4>Client</h4>NRP Projects Pvt Ltd</p>
                    <p><h4>Project value</h4>4.5 C </p>
                    <p><h4>Duration</h4>20 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
                <div className="icon">
                  <h1>🚧</h1>
                </div>
                <div className="container">
                  <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro1} alt="project" width="100%" height="280px" className='mt-5'/>
                  </div>
                <div className="col-md-6 col-lg-6 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction of Vertical storage tanks (CFIVR) 24 Meter Dia 2 Nos, 28 Meter Dia 1 Nos, 12  Meter Dia 1 Nos with all sprinkler system, foam system and IFR Installation at IOCL Marketing Terminal Mothigiri Bihar.</p>
                    <p><h4>Client</h4>NRP Projects Pvt Ltd</p>
                    <p><h4>Project value</h4>2 C </p>
                    <p><h4>Duration</h4>14 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
              {/* <div className="service"> */}
                <div className="icon">
                  <h1>🚧</h1>
                  {/* <img src={oil} alt="oil" width='100px' height="100px"/> */}
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro3} alt="project" height="280px" width="250px" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Fabrication and erection of 6000 Inch dia BPCL  piping works at cochin airport.</p>
                    <p><h4>Client</h4>Thartious Engineering Contractors</p>
                    <p><h4>Project value</h4>30 L </p>
                    <p><h4>Duration</h4>5 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
              {/* <div className="service"> */}
                <div className="icon">
                  <h1>🚧</h1>
                  {/* <img src={oil} alt="oil" width='100px' height="100px"/> */}
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro1} alt="project" height="280px" width="250px" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Construction of Vertical storage tanks (CFIVR) 20 Meter Dia 1 No,  IOCL Marketing Terminal Bangalore.</p>
                    <p><h4>Client</h4>Thartious Engineering Contractors</p>
                    <p><h4>Project value</h4>15 L </p>
                    <p><h4>Duration</h4>6 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
              {/* <div className="service"> */}
                <div className="icon">
                  <h1>🚧</h1>
                  {/* <img src={oil} alt="oil" width='100px' height="100px"/> */}
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro5} alt="project" height="280px" width="250px" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Fabrication and erection of 6000 Inch dia SS piping works at Koodam kulam nuclear power plant </p>
                    <p><h4>Client</h4>L&T Construction </p>
                    <p><h4>Project value</h4>47 L </p>
                    <p><h4>Duration</h4>7 Months</p>
                  </div>
                 </div>
                  </div>
                </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  service" >
              {/* <div className="service"> */}
                <div className="icon">
                  <h1>🚧</h1>
                  {/* <img src={oil} alt="oil" width='100px' height="100px"/> */}
                </div>
                <div className="container">
                  <div className="row">
                  {/* <div className="col-md-6 col-lg-6 col-sm-12" >
                    <img src={pro6} alt="project" height="280px" width="250px" className='mt-5'/>
                  </div> */}
                <div className="col-md-12 col-lg-12 col-sm-12" >
                  <div>
                    <p><h4>Project</h4>Fabrication and erection of 800 MT of Structural erection works at  Koodam kulam nuclear power plant.</p>
                    <p><h4>Client</h4>L&T Construction </p>
                    <p><h4>Project value</h4>70 L </p>
                    <p><h4>Duration</h4>6 Months</p>
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

export default Completed
