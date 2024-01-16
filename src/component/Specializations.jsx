import React from 'react'
import './css/specialization.css'
import img1 from '../../src/assets/oil-tank.png'
import img3 from '../../src/assets/icon7.png'
import img4 from '../../src/assets/piping.png'
import img5 from '../../src/assets/tubes.png'
import img2 from '../../src/assets/structure.png'

function Specializations() {
  return (
    <div className="container specify">
        <div className="row">
            <center className='specialH1'>
                <h1 >Our Specializations</h1>
            </center>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop"> 
                        <h1>
                            <img src={img1} alt="oil tank" height="55px"/>
                        </h1>
                        Tankage
                        <br/>
                        <div className="name">Our tanking solutions are crafted with precision and reliability, addressing the diverse storage needs of industries. From containment of liquids to the storage of gases, our tanking services ensure robust structures that meet the highest standards of safety and efficiency.</div>   
                     </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop"> 
                        <h1>
                            <img src={img2} alt="oil tank" height="55px"/>
                        </h1>   
                         Structurals
                        <br/>
                        <div className="name">Trust us for the design and construction of robust structural components that form the backbone of industrial infrastructure.
                        Precision engineering for robust and durable structural components.
                        Customized solutions to ensure structural integrity and stability.</div>
                     </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop">
                        <h1>👷</h1>    
                         Manpower Supply
                        <br/>
                        <div className="name">Ensure the success of your project with our skilled and adaptable workforce. We provide manpower solutions that align with your project's evolving needs.
                        Flexibility in scaling resources according to project requirements.</div>
                     </div>
                </div>
            </div>
            
            
        </div>
        <br /><br />
        <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card1 playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop"> 
                        <h1>
                            <img src={img3} alt="oil tank" height="55px"/>
                        </h1>   
                        Equipment Erection
                        <br/>
                        <div className="name">At ATTHI ENGINEERING WORKS, our "Equipment Erection Service" stands as a testament to precision, safety, and excellence in industrial assembly. We specialize in the seamless installation and erection of complex machinery and industrial equipment, ensuring optimal functionality and operational efficiency. </div>
                     </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card1 playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop"> 
                        <h1>
                            <img src={img4} alt="oil tank" height="55px"/>
                        </h1>   
                        Piping
                        <br/>
                        <div className="name">Beyond high-pressure systems, we offer expertise in general piping solutions. Whether for process industries, manufacturing, or infrastructure, our piping services cover a wide spectrum of applications.</div>
                     </div>
                     
                </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
                <div className="e-card1 playing">
                    <div className="image"></div>   
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop"> 
                        <h1>
                            <img src={img5} alt="oil tank" height="55px"/>
                        </h1>   
                        Pipe Line
                        <br/>
                        <div className="name">ATTHI ENGINEERING WORKS takes pride in offering specialized "Pipeline Installation Services" that embody precision, efficiency, and a commitment to excellence. Our expertise in pipeline installation spans various industries, delivering reliable solutions that stand the test of time. </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
   
    

  )
}

export default Specializations
