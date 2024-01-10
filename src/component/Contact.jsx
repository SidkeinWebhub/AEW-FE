import React from 'react'
import './css/contact.css'

function Contact() {
  return (
    <div className="container contact-home">
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="card">
            <a href='/' className="singup">Contact Us</a>
            <div className="inputBox1">
                <input type="text" required="required"/>
                <span className="user">Name</span>
            </div>
            <div className="inputBox1">
                <input type="text" required="required"/>
                <span className="user">Email</span>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Phone Number</span>
            </div>
            <div className="inputBox">
                <input type="password" required="required" />
                <span>Message</span>
            </div>
            <button className="enter">Submit</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  p-5 pl-5 mt-5">
            <div className="section-title text-center mb--50 ">
                <p className="description text-justify text-center">Join us in shaping the future of engineering.</p>
                        <hr />
                  <p className="descriptionp  "> Contact ATTHI ENGINEERING WORKS today to explore how our expertise can elevate your projects to new heights.</p>
            </div>
            {/* <img src="/assets/images/contact.svg" height={"70%"} width={"70%"} alt="" /> */}
            <div className="loader">
              <div className="box box0">
                <div></div>
              </div>
              <div className="box box1">
                <div></div>
              </div>
              <div className="box box2">
                <div></div>
              </div>
              <div className="box box3">
                <div></div>
              </div>
              <div className="box box4">
                <div></div>
              </div>
              <div className="box box5">
                <div></div>
              </div>
              <div className="box box6">
                <div></div>
              </div>
              <div className="box box7">
                <div></div>
              </div>
              <div className="ground">
                <div></div>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
