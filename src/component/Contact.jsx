import React, { useState } from 'react'
import './css/contact.css'
import { toast, ToastContainer  } from 'react-toastify'
import axios from 'axios'

function Contact() {
  const [user,setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    message: ""
});
const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
}

const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        await axios.post(`https://project-awe-be.vercel.app/api/v1/create`, user)

         axios
            .post(
                `https://project-awe-be.vercel.app/api/v1/sendmailUser`,
                { email: user.email }
            )
         axios
            .post(`https://project-awe-be.vercel.app/api/v1/sendmail`, {
              userName: user.userName,
              email: user.email,
              phone: user.phone,
              message: user.message
            })
            .then(res => {
                toast.success("Message send  successfully!");
                setUser({userName: "", email: "", phone: "", message: "" });
            }).catch(err => toast.error(err.response.data.msg))
    } catch (err) {
        toast.error("Email Id/ Mobile Number Already Exist")
    }
}
  return (
    <>
    <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
    <div className="container contact-home">
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
        <form onSubmit={submitHandler} >
          <div className="card">
          
            <a href='/contact' className="singup">Contact Us</a>
            <div className="inputBox1">
                <input type="text" name="userName" id="userName" value={user.userName} onChange={readValue}  required="required"/>
                <span className="user">Name</span>
            </div>
            <div className="inputBox1">
                <input type="text" name="email" id="email" value={user.email} onChange={readValue}  required="required"/>
                <span className="user">Email</span>
            </div>
            <div className="inputBox">
                <input type="mobile" name="phone" id="phone" value={user.phone} onChange={readValue}   required="required" />
                <span>Phone Number</span>
            </div>
            <div className="inputBox">
                <input type="message" name="message" id="message" value={user.message} onChange={readValue} required="required" />
                <span>Message</span>
            </div>
            <button type="submit" value="Submit"  className="enter">Submit</button>
            
          </div>
          </form>
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
    </>
  )
}

export default Contact
