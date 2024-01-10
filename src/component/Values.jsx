import React from 'react'
import './css/value.css'

function Values() {
  return (
    <div className='value'>
        <div className="value-container container">
            <div className="row me-5">
                <center className='aboutH2'>
                    <h1 >Our Values</h1>
                </center>
                <div className="value-card col-md-3 col-lg-3 col-sm-12">
                    <div className='value-card1'>
                        <h1>🌐</h1>
                        <h2>Excellence</h2>
                        <p>We strive for excellence in every project, big or small. Our commitment to delivering exceptional results is unwavering, setting industry benchmarks and raising the bar for engineering standards.</p>
                    </div>
                </div>
                <div className="value-card col-md-3 col-lg-3 col-sm-12">
                    <div className='value-card1'>
                        <h1>🤝</h1>
                        <h2>Integrity</h2>
                        <p>Integrity is the bedrock of our operations. We conduct our business with honesty, transparency, and a dedication to ethical practices, earning the trust of our clients and partners.</p>
                    </div>
                    
                </div>
                <div className="value-card col-md-3 col-lg-3 col-sm-12">
                    <div className='value-card1'>
                        <h1>🚀</h1>
                        <h2>Innovation</h2>
                        <p>Embracing the spirit of innovation, we constantly seek new and better ways to engineer solutions. Our team thrives on challenges, turning obstacles into opportunities for growth and advancement.</p>
                    </div> 
                </div>
                <div className="value-card col-md-3 col-lg-3 col-sm-12">
                    <div className='value-card1'>
                        <h1>👷</h1>
                        <h2> Safety First</h2>
                        <p>The safety of our team and stakeholders is non-negotiable. We maintain the highest safety standards, creating an environment where everyone can work and thrive with confidence.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values
