import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import heroimg from "../../assets/images/contactus.png";
import { useFormik } from 'formik';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import schema from './Validation';
import './Contact.scss'
const Contact = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: schema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm()
    },
  });


  return (
    <div className='contact-page'>
      {/* ------------header------------ */}
      <header className="abx-sticky-header" >
        <Nav />
      </header>
      {/* -------------hero-section------------ */}
      <div className="hero-image">
        <Hero heroimg={heroimg} maintx={"Contact Us"} />
      </div>
      {/* ----------blog-page-container--------------- */}
      <div className="contact-section container cx-section">
        <div className="row gx-5">
          <div className="col-md-6 left">
            <div className='head'>
              <h2>Tell us your query</h2>
              <span className='underlinex'></span>
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6 input-bx">
                <input type="text" placeholder="First name" value={values.fname} name="fname" onChange={handleChange} onBlur={handleBlur} />
                {touched.fname && errors.fname ? <span style={{ color: "red" }}>{errors.fname}</span> : null}
              </div>
              <div className="col-md-6 input-bx">
                <input type="text" placeholder="Last name" name='lname' value={values.lname} onChange={handleChange} onBlur={handleBlur} />
                {touched.lname && errors.lname ? <span style={{ color: "red" }}>{errors.lname}</span> : null}
              </div>
              <div className="col-md-12 input-bx">
                <input type="email" id="inputEmail4" placeholder='E-mail' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email ? <span style={{ color: "red" }}>{errors.email}</span> : null}
              </div>
              <div className="col-md-12 input-bx">
                <input type="text" placeholder="Mobile No." name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                {touched.phone && errors.phone ? <span style={{ color: "red" }}>{errors.phone}</span> : null}
              </div>
              <div className="col-md-12 input-bx">
                <textarea rows="3" cols="60" placeholder='Your Message' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur}>

                </textarea>
                {touched.message && errors.message ? <span style={{ color: "red" }}>{errors.message}</span> : null}
              </div>
              <div className="col-12 btx">
                <button type="submit" className="mt_bt input-bx-button" >Submit</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 right">
            <div>
              <div className='head'>
                <h2>Get In Touch</h2>
                <span className='underlinex'></span>
              </div>
              <div className="contactx">
                <span className='location'>
                  <a
                    href="https://goo.gl/maps/U8VV9LKHHvVYFjQ56"
                    target="_blank"

                  >
                    <FaLocationArrow style={{ fill: "#002B3B" }} /> &nbsp; 44,
                    Ayodhya Colony, Hira Nagar, Ajmer Rd, opp. Chitrakoot, Jaipur,
                    Rajasthan 302021
                  </a>

                </span>
                <hr className='line' />
                <span className='message'>
                  <a
                    href="mailto:info@kainskep.com"
                  >
                    <FaEnvelope style={{ fill: "#002B3B" }} /> &nbsp;
                    info@kainskep.com
                  </a>
                </span>
                <hr className='line' />
                <span className="calls">

                  <a href="tel:+91-9509101669">
                    <FaPhoneAlt style={{ fill: "#002B3B" }} />
                    &nbsp; +91-9509101669
                  </a>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </span>
                <hr className='line' />
                <div className='contacty'>
                  <div className='head'>
                    <h2 >Working hours</h2>
                    {/* <span className='underlinex'></span> */}
                  </div>

                  <p>Monday – Saturday:  09AM – 08:30PM IST</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* -------------------map-container----- */}
      <div className="map">
        <div className='map-head'>
          <h2>Find Us On Map</h2>
          <span className='underlinex'></span>

        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.288921207276!2d75.73397047416685!3d26.894324260882915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db476afffffff%3A0x3ad39424d527c60d!2sKainSkep!5e0!3m2!1sen!2sin!4v1669030926691!5m2!1sen!2sin" width="80%" height="450" style={{ border: "2px solid #005067", borderRadius: "30px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Contact