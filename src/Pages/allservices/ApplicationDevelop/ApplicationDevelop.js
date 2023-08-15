import React from "react"
import Navbar from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/Hero/Hero'
import heroimg from "../../../assets/images/application-development.png";
import './ApplicationDevelop.scss'

const ApplicationDevelop = () => {
  const data = [
    {
      id: 0,
      textLeft: true,
      title: "Architecture Strategy and Design",
      img: "/images/AllService/ad1.png",
      content: "Kainskep’s IT architects will work closely with you to align your business strategies and supporting technologies. In addition, our application design foundation and technology-neutral approach allow us to provide multiple innovative architectural options that can help you build a lasting, adaptable IT foundation to support continuing growth cost-effectively."
    },
    {
      id: 1,
      textLeft: false,
      title: "Application Development and System Integration",
      img: "/images/AllService/ad2.png",
      content: "Our user-centric design approach and lean, agile development accelerates business value of your applications. We exploit the benefits of the latest tools and technology, yet are vendor-agnostic and technology-neutral. The result: improved product quality, more useful functionality, lower cost, and a higher ROI. And our project management approach has earned us client recognition for achieving on-time, within-budget delivery."
    },
    {
      id: 2,
      textLeft: true,
      title: "Architecture Strategy and Design",
      img: "/images/AllService/ad3.png",
      content: "Kainskep’s IT architects will work closely with you to align your business strategies and supporting technologies. In addition, our application design foundation and technology-neutral approach allow us to provide multiple innovative architectural options that can help you build a lasting, adaptable IT foundation to support continuing growth cost-effectively."
    },
    {
      id: 3,
      textLeft: false,
      title: "Application Development and System Integration",
      img: "/images/AllService/ad4.png",
      content: "Our user-centric design approach and lean, agile development accelerates business value of your applications. We exploit the benefits of the latest tools and technology, yet are vendor-agnostic and technology-neutral. The result: improved product quality, more useful functionality, lower cost, and a higher ROI. And our project management approach has earned us client recognition for achieving on-time, within-budget delivery."
    },
    {
      id: 4,
      textLeft: true,
      title: "Architecture Strategy and Design",
      img: "/images/AllService/ad5.png",
      content: "Kainskep’s IT architects will work closely with you to align your business strategies and supporting technologies. In addition, our application design foundation and technology-neutral approach allow us to provide multiple innovative architectural options that can help you build a lasting, adaptable IT foundation to support continuing growth cost-effectively."
    },
    {
      id: 5,
      textLeft: false,
      title: "Architecture Strategy and Design",
      img: "/images/AllService/ad6.png",
      content: "Kainskep’s IT architects will work closely with you to align your business strategies and supporting technologies. In addition, our application design foundation and technology-neutral approach allow us to provide multiple innovative architectural options that can help you build a lasting, adaptable IT foundation to support continuing growth cost-effectively."
    }
  ]
  return (


    <>
      <div>
        <header className="abx-sticky-header" >
          <Navbar />
        </header>
        <div className="hero-image">
          <Hero heroimg={heroimg} maintx={"Application Development And Management"} />
        </div>
        {/* --------first-section------------- */}
        <div className="am-section all-ss container ad-section">
          <p>Our comprehensive portfolio of Application Development and Management services combine technical and business expertise with client insight to develop tailored solutions that deliver value to your business.</p>
        </div>
        {/* -----------second-section---------- */}
        <div className="am-section  ad-second-section">
          <div className="all-ss-head ad-xx-section">
            <h2 className="underline-effect">Our Solution</h2>
          </div>
          <div className="container ad-second-second">

            {
              data.map(val => {
                return (
                  <>
                    {val.textLeft ?
                      <div className="row row-1 my-5" key={val.id}>
                        <div className="left-text col-6 all-ss  sidextxt">
                          <div className="sidextxtdiv sidextxt-left">
                            <h3>{val.title}</h3>
                            <p>{val.content}</p>
                          </div>
                        </div>
                        <div className="right-image col-6 sideximg">
                          <div className="sidextxtdiv sidextxt-right text-center">
                            <img src={val.img} alt="" />
                          </div>
                        </div>
                      </div>
                      :
                      <div className="row row-2 my-5" key={val.id}>
                        <div className="left-image col-6 sideximg">
                          <div className="sidextxt-left sidextxtdiv">
                            <img src={val.img} alt="" />
                          </div>
                        </div>
                        <div className="right-text col-6 all-ss  sidextxt ">
                          <div className="sidextxtdiv sidextxt-right">
                            <h3>{val.title}</h3>
                            <p>{val.content}</p>
                          </div>
                        </div>
                      </div>
                    }

                  </>
                )
              })
            }
            {/* ---for-left-text--- */}

            {/* ------for-right-text------- */}

          </div>
        </div>
        {/* --------third-section------- */}
        <div className="am-section all-ss container ad-section ad-xx-section am-comx-heading">
          <h3 className="underline-effect">Move Your Business Beyond Maximum Speed</h3>
          <p className="text-cent">To drive business growth, IT organizations need to bring innovation wherever it’s needed - whether to fast-track new initiatives, update legacy systems, or take advantage of new technologies and channels. Kainskep has been helping clients innovate across all phases of the application lifecycle for over five decades. Our comprehensive portfolio of Application Development and Management services combine technical and business expertise with client insight to develop tailored solutions to optimize value for your business. Our vendor-agnostic approach, supported by a robust set of methodologies and frameworks, leverages open source where feasible and maximizes your return on investment. Through an optimal blend of onsite, nearshore, and offshore resources, Kainskep’s cost-effective delivery and sourcing model balances global reach with local accountability. This ensures flexibility, speed, agility, and delivery excellence regardless of project or geographical complexity. Kainskep’s commitment to R&D enables us to develop the innovative technologies that help keep your business on the leading edge.</p>
        </div>
        {/* ---------four-section------ */}
        <div className="am-section all-ss container ad-section ad-xx-section am-comx-heading">
          <h3 className="underline-effect">Why Choose Us</h3>
          <p className="text-cent">Kainskep Solutions helps customers accelerate digital transformation across the world, we work with you to understand your digital customer journey and build innovative custom solutions that match your unique business needs. As one of the top app development companies, we have helped customers across industries & geographies to extend their business and differentiate their brand with human-centric digital experiences.</p>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default ApplicationDevelop;
