import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './Home.scss'
import services1 from "../../assets/images/Services-1.png";
import { BsInstagram, BsLinkedin, BsTwitter, BsStarFill } from 'react-icons/bs'
import { IoOptions, IoSend } from 'react-icons/io5'
import { Services, testimonials } from './Data'
import { Link } from 'react-router-dom';
import Carousel from "react-elastic-carousel";

const Home = () => {
  const [isIntersection, setIsIntersection] = useState(false)
  const [filterItems, setFilterItems] = useState(testimonials)
  // [testimonials[0]]
  // console.log(filterItems)
  const ref = useRef()
  const options = {
    root: null,
    rootMargin: '-65px',
    threshold: 0//when element end

  }
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      let entry = entries[0]
      setIsIntersection(entry.isIntersecting)
      // console.log(entry)
    }, options);
    //  let target = document.querySelector('#listItem');
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }

  }, [ref, options])
  // console.log(isIntersection)
  const handleFilter = (val) => {
    const filterItems = testimonials.filter(x => x === val)
    // console.log(filterItems)
    setFilterItems(filterItems)
  }
  //  ------------------
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 900, itemsToShow: 1 },
  ];
  // -------------------
  return (
    <>
      {/* -------------home-section------------------ */}
      <div className='home-main-container' ref={ref}>
        <header className={`header ${isIntersection ? "" : "stickyheader"}`} >
          <Nav isIntersecting={isIntersection} />
        </header>
        <div className="home-image-sidebar">
          <div className='first'>
            <div>
              <BsInstagram />
            </div>
            <div>
              <a href="https://www.linkedin.com/company/kainskep-solutions/" target="_blank" style={{ textDecoration: "none" }}>
                <BsLinkedin />
              </a>
            </div>
            <div>
              <BsTwitter />

            </div>
          </div>
          <h4>Big Opportunity for your Business</h4>

          <Link to="/contact">
            <button className="mt_bt">
              Contact Us
            </button>
          </Link>
        </div>
        <div className='homeImage-container'>
          <img src="images/home/Home.webp" alt="" />
        </div>
        <div className='home-mobile-content'>
          <div className='d-flex align-items-center hmc-first'>
            <div className='first'>
              <div> <BsInstagram /></div>
              <div>
                <a href="https://www.linkedin.com/company/kainskep-solutions/" target="_blank" style={{ textDecoration: "none" }}>
                  <BsLinkedin />
                </a>
              </div>
              <div><BsTwitter />  </div>
            </div>
            <div className='hmc-first-first'>
              <h4>Big Opportunity for your Business</h4>
            </div>
          </div>
          <div className='text-center'>

            <Link to="/contact">
              <button className="mt_bt mobile-btn">
                Contact Us
              </button>
            </Link>

          </div>
        </div>
      </div>
      {/* -----------------about-us-container--------------- */}
      <div className={`abus-container container section ${isIntersection ? "" : "stickyheader-abuscontainer"}`}>
        <div className="row">
          <div className="col-md-8 first">
            <h2>About Us</h2>
            <p>Kainskep is a global technology and analytics services company. We help our clients achieve speed-to-market, overcome digital barriers, and create business value with our specialized service offerings and consultative business approach. We speak the language of business as fluently as we do the language of technology. In other words, we speak digital. Our goal: accelerate our clients’ digital leadership.</p>
          </div>
          <div className="col-md-4 second">
            <img src="images/home/AboutImage.png" alt="" />
          </div>
        </div>
      </div>
      {/* ---------service-section----------------------------- */}
      <div className="svc-container section">
        <div className='first'>
          <h2>Our Services</h2>
          <p>Providing the Best Solution To the Business</p>
        </div>
        <div className="cardx-container">
          <div className="rx">
            {
              Services.map((val, index) => {
                return (
                  <div className=" card-x" key={val.id}>
                    {/* <div className="cardx"> */}
                    <Link to={`/services/${val.link}`} style={{ textDecoration: "none" }} className="cardx">
                      <div className="image">
                        <img src={val.img} alt="" />
                      </div>
                      <div>
                        <h3>{val.title}</h3>
                        <p>{val.content}</p>
                      </div>
                    </Link>
                    {/* </div> */}

                  </div>
                )
              })
            }

            <div className=" cardx-btn">
              <div className="btn">
                <Link to="/services">
                  {/* <button className='mt_bt'>Read More</button> */}
                  <button type="button" className="button button--ghost" >
                    Read More
                  </button>
                </Link>
              </div>

            </div>




          </div>

        </div>
      </div>
      {/* --------testimonials-section---------------- */}
      <div className="tmc-container section container">
        <div className="first">
          <h2>Testimonials</h2>
          <p>Some Words From Our Clients</p>
        </div>
        <div className="second">
          <div className="left">
            {
              testimonials.map(val => {
                return (
                  <div className="mySlides" onClick={() => handleFilter(val)} key={val.id}>
                    <div className="box">
                      <div className='d-flex'>
                        <img src={val.img} alt="" />
                        <div>
                          <h4>{val.title}</h4>
                          <div className='stars-div'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="right">
            <Carousel breakPoints={breakPoints}
              enableAutoPlay
              autoPlaySpeed={2000}
              showArrows={false}
            >

              {
                filterItems.map(val => {
                  return (
                    <div className="mySlides" key={val.id}>
                      <div className="box">

                        <div className='d-flex'>
                          <img src={val.img} alt="" />
                          <div>
                            <h4>{val.title}</h4>
                            <div className='stars-div'>
                              <BsStarFill />
                              <BsStarFill />
                              <BsStarFill />
                              <BsStarFill />
                              <BsStarFill />

                            </div>
                          </div>

                        </div>

                        <div className="text">
                          <p>{val.content}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Carousel>

          </div>
        </div>
      </div>
      {/* ----------------footer----------------------- */}
      <Footer />
    </>
  )
}

export default Home