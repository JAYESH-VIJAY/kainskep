import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './Service.scss'
import heroimg from "../../assets/images/Blog-Technical-Skills.png";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const AboutUs = () => {

  const data = [
    {
      id: 0,
      direction: "right",
      fade: "fade-left",
      img: "images/home/Cloud.png",
      title: "Cloud Transformation",
      link: "/cloud-transformation",
      order1: 1,
      order2: 2,
      content: "Industry accepted tools can accelerate the assessment, analysis and migration process, but what to use, when to use and how to use comes only from experience of an expert cloud migration engineer. Tools clubbed with proficient SMEs with their knowledge collected by tried and tested methods and best practices, together will only yield fruitful results."

    },
    {
      id: 1,
      direction: "left",
      fade: "fade-right",
      img: "images/home/AppModerization.png",
      title: "AppModernization,Cloud Native",
      link: "/app-modernization-cloud-native",
      order1: 2,
      order2: 1,
      content: "Legacy technology and IT systems can create a dilemma. While still critical, they often hold organizations back and become an obstacle to efficiency and the smooth operation of your business. Over time, existing enterprise systems can prove expensive, as their inability to respond to business process change prevents work from being done in new, more effective ways. With technology debt due to rise in the next 3 years, these systems are also hindering speed to market and innovation."
    },
    {
      id: 2,
      direction: "right",
      fade: "fade-left",
      img: "images/home/Devops-automation.png",
      title: "DevOps & Automation",
      link: "/dev-ops-and-automation",
      order1: 1,
      order2: 2,
      content: "Fast-growing consumer demand driven by the advent of digital solutions led to the replacement of critical machines with technology-driven smart solutions. Now, the US as well as the world is witnessing the next stage of such intelligent solutions in the form of Automation!More than a trend, Automation has become a need of the hour for many firms across the global countries including the US."

    },
    {
      id: 3,
      direction: "left",
      fade: "fade-right",
      img: "images/home/ApplicationMangement.png",
      title: "Application Development and Management",
      link: "/application-development-and-management",
      order1: 2,
      order2: 1,
      content: "Our comprehensive portfolio of Application Development and Management services combine technical and business expertise with client insight to develop tailored solutions that deliver value to your business.Our user-centric design approach and lean, agile development accelerates business value of your applications. We exploit the benefits of the latest tools and technology, yet are vendor-agnostic and technology-neutral. "
    },
    {
      id: 4,
      direction: "right",
      fade: "fade-left",
      img: "images/home/CloudData.png",
      title: "Cloud Data Services",
      link: "/data-analytics",
      order1: 1,
      order2: 2,
      content: "At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Data Services. Our data experts can help you to modernize your legacy technology stack with end-to-end data services like Machine Learning, Big Data and Analytics, Databricks, ETL Pipelines and more.Our experts have a high level of competence and expertise in working on multiple cloud-based data services and solutions."
    },
  ]






  useEffect(() => {

    const value = document.querySelectorAll(".animated-number");
    const speed = 10;
    value.forEach(data => {
      const updatedNumber = () => {
        let targetNumber = parseInt(data.getAttribute("data-index-number"))
        let initialValue = parseInt(data.innerHTML)
        //  console.log(targetNumber,initialValue)
        const incrementNumber = Math.trunc(targetNumber / speed)
        if (initialValue < targetNumber) {
          data.innerHTML = initialValue + incrementNumber
          setTimeout(updatedNumber, 10)
        }
      }
      updatedNumber()
    })
  }, [])




  return (
    <div style={{ overflowX: "hidden" }}>
      {/* -------------service-main-container------------------ */}
      <div className='sce-hero-container' >
        <header className="abx-sticky-header" >
          <Nav />
        </header>
        <div className="hero-image">
          <Hero heroimg={heroimg} maintx={"Our Services"} />
        </div>

      </div>
      {/* -----------------ap-section-1--------------- */}
      <div className="sce-section sce-section-1">
        <div>
          <div className='aimtiontxt-logo'>
            <img src="images/service/1.svg" alt="imagenotallowed" />
          </div>
          <div className='second'>
            <p className='animated-number' data-index-number="200">0</p>
            <span>+</span>
          </div>
          <p className="animatednumber-text">Project Done</p>
        </div>
        <div>
          <div className='aimtiontxt-logo'>
            <img src="images/service/2.svg" alt="imagenotallowed" />
          </div>
          <div className='second'>
            <p className='animated-number' data-index-number="100">0</p>
            <span>+</span>
          </div>
          <p className="animatednumber-text">Clints Worked With</p>
        </div>

        <div>
          <div className='aimtiontxt-logo'>
            <img src="images/service/3.svg" alt="imagenotallowed" />
          </div>
          <div className='second'>
            <p className='animated-number' data-index-number="70">0</p>
            <span>+</span>
          </div>
          <p className="animatednumber-text">Testimonials</p>
        </div>
        <div>
          <div className='aimtiontxt-logo'>
            <img src="images/service/4.png" alt="imagenotallowed" />

          </div>
          <div className='second'>
            <p className='animated-number' data-index-number="100">0</p>
            <span>%</span>
          </div>
          <p className="animatednumber-text">Satisfication</p>
        </div>
      </div>


      {/* -----------------ap-section-2--------------- */}
      <div className="sce-section sce-section-2">
        <div className="heading">
          <h2>What We Provide</h2>
          <p>Providing the best solutions to the business</p>
        </div>

      </div>
      {/* ---------ap-section-3----------------------------- */}
      <div className="sce-section-3">
        {
          data.map(val => {
            return (
              <div className="content" key={val.id} data-aos={val.fade}>
                <div className='image' style={{ order: `${val.order1}` }}>
                  <img src={val.img} alt="" />
                </div>
                <div className={`text ${val.direction}`} style={{ order: `${val.order2}` }}>
                  <h2>{val.title}</h2>
                  <p>{val.content}</p>
                  <div>
                    <Link to={`/services${val.link}`}>
                      <button className="mt_bt">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
      {/* --------ap-section-4---------------- */}

      {/* --------ap-section-5---------------- */}

      {/* ----------------footer----------------------- */}
      <Footer />
    </div>
  )
}

export default AboutUs