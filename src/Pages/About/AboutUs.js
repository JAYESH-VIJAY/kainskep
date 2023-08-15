import React from 'react'
// import Nav from '../../fractions/Nav/Nav'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './AboutUs.scss'
import heroimg from "../../assets/images/AboutPage1.png";
import mission from '../../assets/images/mission.png'
import values from '../../assets/images/values.jpg'
import Vision from '../../assets/images/vision.jpg'
const AboutUs = () => {
  return (
    <>
    {/* -------------aboutpage-main-container------------------ */}
    <div className='ap-hero-container'>
    <header className="abx-sticky-header" >
     <Nav/>
 </header>
  <div className="hero-image">
     <Hero heroimg={heroimg} maintx={"Our Vision"}/>
  </div>

    </div>
    {/* -----------------ap-section-1--------------- */}
    <div className="ap-section">
        <p>
    Kainskep is a global technology and analytics services company. We help our clients achieve speed-to-market, overcome digital barriers, and create business value with our specialized service offerings and consultative business approach. We speak the language of business as fluently as we do the language of technology. In other words, we speak digital. Our goal: accelerate our clients’ digital leadership.
    </p>
    </div>
    {/* -----------------ap-section-2--------------- */}
  <div className="ap-section ap-section-2">
   <h4>Narrative</h4>
   <span className='underline-effectxx'></span>
   <p>Generate business value for our clients through technology, data/analytics and design.</p>
  </div>
 {/* ---------ap-section-3----------------------------- */}
   <div className=" ap-section-3">
    <div className="1">
      <div style={{backgroundImage: `url(${mission})` }} className="ap-section-bg"></div>
<div className='ap-section-bg-axc'>       
        <h4>Mission</h4>
        <p>Put client success first, and focus on staying ahead of the curve with continuous R&D.</p>
        </div>
    </div>
    <div className="2">
    <div style={{backgroundImage: `url(${Vision})` }} className="ap-section-bg"></div>
    <div className='ap-section-bg-axc'> 
        <h4>Vision</h4>
        <p>Put client success first, and focus on staying ahead of the curve with continuous R&D.</p>
        </div>
    </div>
    <div className="3">
    <div style={{backgroundImage: `url(${values})` }} className="ap-section-bg"></div>
    <div className='ap-section-bg-axc'> 
        <h4>Values</h4>
        <p>Put client success first, and focus on staying ahead of the curve with continuous R&D.</p>
        </div>
    </div>
  </div>
    {/* --------ap-section-4---------------- */}
    <div className="ap-section">
    <h4>Client Value Proposition</h4>
    <span className='underline-effectxx'></span>
    <p>We believe in enhancing business value of our clients by delivering path-breaking and sustainable solutions. We are constantly helping organizations explore and implement new business ideas by augmenting the power of technology, data and analytics.</p>
        
        <p>Our methodology focuses on enhancing efficiency by implementing technology to come up with customer-centric and practical and merit-based solution. Our foresighted vision to envisage future enables us to help clients implement new customer-centric service models and leverage big data to plan and implement suitable strategies for desired business outcome.</p>
    </div>
    {/* --------ap-section-5---------------- */}
    <div className="ap-section">
    <h4>Why Choose Us</h4>
    <span className='underline-effectxx'></span>
    <p>Kainskep Solutions helps modern organizations to address their data-related needs from building Cloud architecture, real-time data collection, processing, database management, data analytics to business intelligence (BI), Machine Learning (ML) and Artificial Intelligence (AI).</p>
    </div>
   {/* ----------------footer----------------------- */}
     <Footer/>
    </>
  )
}

export default AboutUs