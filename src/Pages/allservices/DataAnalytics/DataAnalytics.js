import React from "react"
import Navbar from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/Hero/Hero'
import heroimg from "../../../assets/images/dataAnalytic.png";
import './DataAnalytics.scss'

export default function DataAnalytics() {

   return (
      <div>
         <header className="abx-sticky-header" >
            <Navbar />
         </header>
         <div className="hero-image">
            <Hero heroimg={heroimg} maintx={"Data Analytics"} />
         </div>
         {/* ------------first-section---------- */}
         <div className="am-section all-ss ad-section container">
            <p>At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Data Services. Our data experts can help you to modernize your legacy technology stack with end-to-end data services like Machine Learning, Big Data and Analytics, Databricks, ETL Pipelines and more.</p>
         </div>
         {/* -------second-section--------- */}
         <div className="am-section container dsecond-section">
            <div className="row">
               <div className="col-7 all-ss ad-section left sidextxt">
                  <p>Our experts have a high level of competence and expertise in working on multiple cloud-based data services and solutions. We can help you to leverage the best-in-class capabilities for deploying fully managed Cloud Data Services. Our certified data solution architects can assist you with all of your data management and analytics needs.</p>
               </div>
               <div className="col-5 right sideximg">
                  <div>
                     <img src="/images/AllService/d1.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
         {/* --------third-section-------- */}
         <div className="am-section container dthird-section">
            <div className="all-ss-head ad-xx-section first">
               <h2 className="underline-effect">Use data as a strategic asset to predict business performance</h2>
            </div>
            <div className="image">
               <img src="/images/AllService/d2.png" alt="" />

            </div>
         </div>
         {/* ----------four-section----------- */}
         <div className="am-section container all-ss ad-xx-section ad-section d4section">
            <h3 className=" text-capitalize underline-effect">Cloud Data Platform Development Journey</h3>
            <p>Our clients realize value from the Cloud Data Platform development at a very early stage in their journey.</p>
         </div>
         {/* ---------five-section------------ */}
         <div className="am-section container d5section">
            <div className="row">
               <div className="col-12 col-sm-4 numberical-section">
                  <div className="number">01</div>
                  <h3 className="underline-effect">Discovery</h3>
                  <p>Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
               <div className="col-12 col-sm-4 numberical-section">
                  <div className="number">02</div>
                  <h3 className="underline-effect">Value Creation</h3>
                  <p>Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
               <div className="col-12 col-sm-4 numberical-section">
                  <div className="number">03</div>
                  <h3 className="underline-effect">Acceleration</h3>
                  <p>Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
            </div>

         </div>
         {/* --------six-section---------- */}
         <div className="am-section container all-ss ad-section d6section">
            <p>
               <em>“Build a single source of truth for all your data-structured, unstructured, or streaming-to drive transformative solutions like BI and reporting, AI/ML, and real-time analytics. Take advantage of the performance, flexibility, and security of fully managed Cloud Data Platform to get started with ease”
               </em>

            </p>

         </div>
         {/* ----------seven-section------------ */}
         <div className="am-section container">
            <div className="all-ss-head text-center ad-xx-section">
               <h2 className="text-capitalize underline-effect">Our capabilities to help you get the most from Cloud</h2>
            </div>
            <div className="image row">
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d3.png" alt="" className="d7section-img" />
                  </div>
                  <p>HD Insight</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d4.png" alt="" className="d7section-img" />
                  </div>
                  <p>Kafka</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d5.png" alt="" className="d7section-img" />
                  </div>
                  <p>Spark</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d6.png" alt="" className="d7section-img" />
                  </div>
                  <p>Data Lake</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d7.png" alt="" className="d7section-img" />
                  </div>
                  <p>Synapse Analytics</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d8.png" alt="" className="d7section-img" />
                  </div>
                  <p>ELK Tools</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d9.png" alt="" className="d7section-img" />
                  </div>
                  <p>Data factory</p>
               </div>
               <div className="col-6 col-sm-3 d7section-imgx">
                  <div>
                     <img src="/images/AllService/d10.png" alt="" className="d7section-img" />

                  </div>
                  <p>Databricks</p>
               </div>
            </div>
         </div>
         {/* ----------eight-section-------- */}
         <div className="am-section container all-ss ad-section ad-xx-section d8section">
            <h3 className="underline-effect">Why Choose Us</h3>
            <p>Kainskep Solutions helps modern organizations to address their data-related needs from building Cloud architecture, real-time data collection, processing, database management, data analytics to business intelligence (BI), Machine Learning (ML) and Artificial Intelligence (AI).</p>
         </div>

         <Footer />

      </div>
   )
}