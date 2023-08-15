import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Hero from "../../../components/Hero/Hero";
import heroimg from "../../../assets/images/casestudydetails.jpg";
import { useParams } from "react-router-dom";
import "./CaseStudyDetails.scss";
import axios from "axios";
import fetchApi from "../../../Api/Api";
import Spinner from "../../../components/Spinner/Spinner";
import { Divider } from "primereact/divider";
import appmode1 from "../../../assets/images/appmode1.png";
import { Card } from "primereact/card";
const url = "http://20.169.135.67:5000/blog";

const totalData = [
  {
    heading: "App Modernization for a Medium Sized Insurance Company on AWS",
    content: [
      {
        Overfiew:
          "The medium sized insurance company had been using a set of legacy applications for several years. These applications were running on aging hardware and were becoming increasingly difficult to maintain and upgrade. The company wanted to modernize these applications to take advantage of the scalability, security, and reliability offered by the cloud. After evaluating different cloud providers, the company decided to go with Amazon Web Services (AWS) for its app modernization Projects.",
      },
      {
        Challenges:
          " The insurance company faced several challenges while modernizing its legacy applications on AWS. Some of the key challenges were: Complexity of the legacy applications: The legacy applications were highly complex and consisted of a large number of interconnected components. This made it difficult to understand the overall architecture and identify the areas that needed to be modernized. Dependency on aging hardware: The legacy applications were heavily dependent on the aging hardware they were running on. Migrating these applications to the cloud required significant refactoring and re-architecting to ensure that they could run smoothly on the cloud. Lack of in-house expertise: The insurance company did not have a team of developers with experience in modernizing applications on the cloud. This made it difficult for them to effectively plan and execute the app modernization project.`,",
      },
      {
        Solution:
          "To overcome these challenges, the insurance company partnered with a cloud consulting firm with expertise in app modernization on AWS. The consulting firm helped the company with the following: Assessment of the legacy applications: The consulting firm conducted an in-depth assessment of the legacy applications to understand their overall architecture and identify the areas that needed to be modernized. This helped the company to create a roadmap for the app modernization project. Refactoring and re-architecting: The consulting firm helped the company with refactoring and re-architecting the legacy applications to make them cloud-ready. This involved decomposing the monolithic applications into microservices and containerizing them using Kubernetes. The microservices were built using Node.js and connected to a SQL Server database for storage. Redis was used as a cache to improve the performance of the applications. Migration to AWS: The consulting firm helped the company with the actual migration of the legacy applications to AWS. This involved setting up the necessary infrastructure on AWS, deploying the applications to a Kubernetes cluster, and testing them to ensure that they were working as expected. The company also used an S3 bucket to store static assets and backups of the application data.",
      },
      {
        Results:
          " The app modernization project on AWS was a success for the insurance company. Some of the key benefits the company realized were: Improved scalability: The modernized applications were able to scale up and down as needed, which helped the company to better handle peak loads and reduce costs. Enhanced security: The modernized applications were built to follow best practices for security on the cloud, which helped the company to improve its overall security posture., Increased reliability: The modernized applications were designed to be resilient on the cloud, which helped the company to reduce downtime and improve its overall service availability., Reduced maintenance costs: By moving its applications to the cloud, the company was able to significantly reduce its maintenance costs. This was because the company no longer had to worry about maintaining aging hardware or dealing with infrastructure issues.",
      },
      {
        Conclusion:
          "App modernization on AWS helped the medium sized insurance company to improve its scalability, security, and reliability, while also reducing its maintenance costs. By partnering with a cloud consulting firm with expertise in app modernization, the company was able to successfully modernize its legacy applications and take advantage of the benefits offered by the cloud.",
      },
    ],
  },
];
const CaseStudyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // const getContextId = async (id) => {
  //     const finalUrl = url + "/" + id;
  //     // console.log(finalUrl);
  //     const res = await fetchApi(finalUrl);
  //     // console.log(res.data);
  //     if (res.data) {
  //         setData(res.data);
  //     } else {
  //         console.log(res)
  //     }
  // };

  useEffect(() => {
    // console.log(value.state)
    // const id = localStorage.getItem("id");
    // getContextId(id);
    // localStorage.removeItem("id");
    setData(totalData);
  }, []);
  // console.log(id)
  // console.log(data)
  // if (!data.length) {
  //     return <Spinner />;
  // }

  return (
    <div>
      {/* --------------header----------- */}
      <header className="abx-sticky-header">
        <Nav />
      </header>
      {/* -----------hero-section------------ */}
      <div className="hero-image casestudydetails-heroimage">
        <Hero heroimg={heroimg} maintx={`${id}`} />
  
      </div>
      {/* <div className="brt-page casedetails-page">
                <div className="brt-container  casedetails-container custom-container2">
                    <div className="brt-content casedetails-content">
                        {data.map((val, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="casedetails-heading text-center">{val.heading}</h3>
                                    <Divider />
                                    <br />
                                    <br />
                                    <br />
                                    <div>
                                        {
                                            val.content.map((res) => {

                                                return (
                                                    <>
                                                        <p className="casedetails-headingx">App Moderization {Object.keys(res)}</p>
                                                        <p style={{ whiteSpace: "pre-line" }} className="casedetails-para">
                                                            {Object.values(res)}</p>
                                                        <br />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <Footer />
            </div> */}
                  <div className="about-client-sp">
          <div className="logo-text">
            <img src="" alt="" />
            <p>
         <span style={{color:" #6b6b6b "}}> Australia </span><span style={{color:"#d9177f"}}>|</span> Media & Entertainment
            </p>
          </div>
          <div className="text">
          AusBiz was a first of its kind platform that visioned to connect various stakeholders with opportunities for financial success, through high quality, engaging content. The aim was to cater this service through Live Streaming and Video On Demand (VOD). AusBiz partners with businesses, and provides different stakeholders a platform where they can be informed, inspired and share their knowledge.
          </div>
        </div>
      {/* -----------------highlight-section----------- */}
      <div className="highlights-section am-section">
        <h3 className="highlight-text csd-text text-center underline-effect underline-effect-color">Highlights</h3>
        <div className="shadow-cards">
          <div className="shcards">
            <div className="blue-box"></div>
            <div className="content-box">
              <div className="text">
                App modernization on AWS helped the medium sized insurance
                company to improve its scalability, security, and reliability.
              </div>
            </div>
          </div>
          <div className="shcards">
            <div className="blue-box"></div>
            <div className="content-box">
              <div className="text">
                By partnering with a cloud consulting firm with expertise in app
                modernization, the company was able to successfully modernize.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="csd-section ad-section am-section">
        <p className="text-center">
          <span style={{ fontWeight: "700", color: "#05438d" }}>
            TO THE NEW took
          </span>
          <span style={{ color: "#d9177f" }}>
            {" "}
            an end to end technology ownership
          </span>{" "}
          and developed an OTT platform for AusBiz to provide live and on-demand
          video of the latest news in Australian business to cater to the market
          watchers.
        </p>
      </div>
      <div className="objectives ad-xx-section all-ss-head am-section">
        <h2 className=" text-capitalize csd-text underline-effect underline-effect-color">Challenges</h2>

        <div className="sp-objectives row">
          <div className="objectives-sx  col-md-4  commn-logocards">
            <div>
              <div className="logo">
                <img
                  src="/images/appmoderization/Jadoo-2.svg"
                  alt="Jadoo-svg"
                />
              </div>
              <p>Complexity of the legacy applications</p>
            </div>
          </div>
          <div className="objectives-sx  col-md-4  commn-logocards">
            <div>
              <div className="logo">
                <img
                  src="/images/appmoderization/Jadoo-3.svg"
                  alt="Jadoo-svg"
                />
              </div>
              <p>Dependency on aging hardware</p>
            </div>
          </div>
          <div className="objectives-sx  col-md-4  commn-logocards">
            <div>
              <div className="logo">
                <img
                  src="/images/appmoderization/Jadoo-4.svg"
                  alt="Jadoo-svg"
                />
              </div>
              <p>Lack of in-house expertise</p>
            </div>
          </div>
          <div className="objectives-sx  col-md-4  commn-logocards">
            <div>
              <div className="logo">
                <img
                  src="/images/appmoderization/Jadoo-5.svg"
                  alt="Jadoo-svg"
                />
              </div>
              <p>To expand the customer base</p>
            </div>
          </div>
        </div>
      </div>
      <div className="solution am-section">
        <div className="all-ss ad-section">
          <h3 className="csd-text text-center underline-effect underline-effect-color">The Solution</h3>
          <p style={{ textAlign: "center" }}>
            To overcome these challenges, the insurance company partnered with a
            cloud consulting firm with expertise in app modernization on AWS.
            The consulting firm helped the company with the following:
          </p>
        </div>
        <div className="row s-row">
          <div className="col-5 sn-cards commn-logocards">
            <div className="logo">
              <img src="/images/appmoderization/Jadoo-2.svg" alt="Jadoo-svg" />
            </div>
            <div className="text">
              <strong>Assessment of the legacy applications:</strong> The
              consulting firm conducted an in-depth assessment of the legacy
              applications to understand their overall architecture and identify
              the areas that needed to be modernized.
            </div>
          </div>
          <div className="col-5 sn-cards commn-logocards">
            <div className="logo">
              <img src="/images/appmoderization/Jadoo-3.svg" alt="Jadoo-svg" />
            </div>
            <div className="text">
              <strong>Migration to AWS:</strong>The consulting firm helped the
              company with the actual migration of the legacy applications to
              AWS.
            </div>
          </div>
          <div className="col-5 sn-cards commn-logocards">
            <div className="logo">
              <img src="/images/appmoderization/Jadoo-4.svg" alt="Jadoo-svg" />
            </div>
            <div className="text">
              Provided our application infrastructure monitoring solution for
              easier, end-to-end monitoring from a single console
            </div>
          </div>
          <div className="col-5 sn-cards commn-logocards">
            <div className="logo">
              <img src="/images/appmoderization/Jadoo-5.svg" alt="Jadoo-svg" />
            </div>
            <div className="text">
              Integrated SSO (single sign-on) on Web & iOS app and implemented
              Google Analytics on the website
            </div>
          </div>
        </div>
        <div className="download-casestudy text-center">
        <button className="button button--ghost " style={{width:"25%",background:"rgb(217,23,127)",color:"white",borderColor:"rgb(217,23,127)"}}>Download Case Study</button>
      </div>
      </div>

      <div
        className="value-deliver-section"
        style={{ backgroundImage: `url(${appmode1})` }}
      >
        <div className="first vds text-center">
          <h3 className="underline-effect underline-effect-color">Results</h3>
          <p>
            The app modernization project on AWS was a success for the insurance
            company. Some of the key benefits the company realized were:
          </p>
        </div>
        <div className="second vds">
          <div className="row">
            <div className="col-md-3 vdeliver-cards">
              {/* <Card  style={{ width: '25rem', marginBottom: '2em',borderRadius:"0px"}}> */}
              <div className="value-deliver-cards">
                <p className="m-0 text-center" style={{ lineHeight: "1.5" }}>
                  The modernized applications were able to scale up and down as
                  needed, which helped the company to better handle peak loads
                  and reduce costs.
                </p>
              </div>
              {/* </Card> */}
            </div>
            <div className="col-md-3 vdeliver-cards">
              {/* <Card  style={{ width: '25rem', marginBottom: '2em',borderRadius:"0px"}}> */}
              <div className="value-deliver-cards">
                <p className="m-0 text-center" style={{ lineHeight: "1.5" }}>
                  The modernized applications were built to follow best
                  practices for security on the cloud, which helped the company
                  to improve its overall security posture.
                </p>
              </div>
              {/* </Card> */}
            </div>
            <div className="col-md-3 vdeliver-cards">
              {/* <Card  style={{ width: '25rem', marginBottom: '2em',borderRadius:"0px" }}> */}
              <div className="value-deliver-cards">
                <p className="m-0 text-center" style={{ lineHeight: "1.5" }}>
                  The modernized applications were designed to be resilient on
                  the cloud, which helped the company to reduce downtime and
                  improve its overall service availability.
                </p>
                {/* </Card> */}
              </div>
            </div>
            <div className="col-md-3 vdeliver-cards">
              {/* <Card  style={{ width: '25rem', marginBottom: '2em',borderRadius:"0px" }}> */}
              <div className="value-deliver-cards">
                <p className="m-0 text-center" style={{ lineHeight: "1.5" }}>
                  By moving its applications to the cloud, the company was able
                  to significantly reduce its maintenance costs.
                </p>
              </div>
              {/* </Card> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyDetails;
