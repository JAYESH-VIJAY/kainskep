import React from "react"
import Navbar from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/Hero/Hero'
import heroimg from "../../../assets/images/AppModerization.png";
import './AppModerization.scss'
import { BsCloudFog2 } from "react-icons/bs";

export default function AppModerization() {
    const data = [
        {
            id: 0,
            textLeft: false,
            title: "Accelerate digital transformation",
            img: "/images/AllService/app3.png",
            content: "Application modernization is driven by the need to transform business to build new capabilities and deliver them quickly. Adopting DevOps and Cloud-native tools accelerates the overall time from development to deployment, reducing it from Days to hours, thereby helping businesses transform faster."
        },
        {
            id: 1,
            textLeft: true,
            title: "Change the developer experience",
            img: "/images/AllService/app4.png",
            content: "Quickly create and deliver new applications and services through adoption of a cloud-native architecture and containerization. Developers can deploy multiple changes within hours without worrying about the integration and deployment part."
        },
        {
            id: 2,
            textLeft: false,
            title: "Accelerate delivery",
            img: "/images/AllService/app6.png",
            content: "Adopt DevOps best practices to drive a culture of automation and transformation, can cut down time to market from Weeks to hours. Quick code changes can be deployed on to Production without much delay and human intervention."
        }
    ]
    return (
        <div>
            <header className="abx-sticky-header" >
                <Navbar />
            </header>
            <div className="hero-image">
                <Hero heroimg={heroimg} maintx={"App Modernization, Cloud Native"} />
            </div>
            {/* -----------------------1------------- */}
            <div className="container am-section am-first all-ss ad-section">
                <p>Legacy technology and IT systems can create a dilemma. While still critical, they often hold organizations back and become an obstacle to efficiency and the smooth operation of your business. Over time, existing enterprise systems can prove expensive, as their inability to respond to business process change prevents work from being done in new, more effective ways. With technology debt due to rise in the next 3 years, these systems are also hindering speed to market and innovation.Kainskep provides Modernization Services that don’t just drive reduced cost, risk and increased agility. By focusing on the user experience, our approach creates additional business value that results in increased collaboration, productivity and revenue. We do this by consolidating, re-architecting, migrating, replacing and automating your IT systems.This modernized state puts you on the right road for your digital journey.</p>
            </div>
            {/* --------------------2------------ */}
            <div className="am-second am-section container-fluid all-ss-ims">
                {/* <img src="/images/AllService/cl2.png" alt="" /> */}
                <div className="am-second-x all-ss-imsx">

                </div>
                <div className="am-second-y all-ss all-ss-imsy">
                    <p>
                        “Cloud native is the future of application development, with massive potential for business impact—the ability to move an idea into production quickly and efficiently”
                    </p>
                </div>
            </div>
            {/* --------------------3--------------- */}
            <div className="am-third am-section container">
                <div className="all-ss-head  am-third-x am-comx-heading">
                    <h2 className="underline-effect">DevOps helps more and faster</h2>
                </div>
                <div className="row gx-5 xs-gap">
                    <div className="col-12 col-sm-6">
                        {/* <img src="/images/AllService/app1.png" alt="" /> */}
                        <div className="amcard ms-auto">
                            <div>
                                <img src="/images/AllService/app10.png" alt="" />
                            </div>
                            <div>
                                <h3>Most frequent code Deployments</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        {/* <img src="/images/AllService/app2.png" alt="" /> */}
                        <div className=" amcard">
                            <div className="amcard-y">
                                <img src="/images/AllService/app11.png" alt="" />
                            </div>
                            <div>
                                <h3>Faster lead time from commit to deploy</h3>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* ---------------4--------------- */}
            <div className="am-four am-section container">
                <div className="all-ss-head text-center am-comx-heading am-four-x">
                    <h2 className="underline-effect">Benefits of App Modernization</h2>
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
                                                <div className="sidextxtdiv sidextxt-right mx-auto">
                                                    <img src={val.img} alt={val.title} />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="row row-2 my-5" key={val.id}>
                                            <div className="left-image col-6 sideximg">
                                                <div className="sidextxt-left sidextxtdiv">
                                                    <img src={val.img} alt={val.title} />
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


                </div>


            </div>
            {/* -------------5------------------ */}
            <div className="am-five am-section container-fluid all-ss-ims">
                {/* <img src="/images/AllService/cl2.png" alt="" /> */}
                <div className="am-five-x all-ss-imsx">

                </div>
                <div className="am-five-y all-ss all-ss-head all-ss-imsy">
                    <h2 className="underline-effect">The DevOps Promise</h2>
                    <p>
                        Accelerate Software Deployment. Balance, Speed, Cost, Quality & Risk. Reduce time to user feedback
                    </p>
                </div>
            </div>
            {/* ------------6--------------- */}
            <div className="am-six am-section container am-sixx ">
                <div className="head all-ss-head text-center am-comx-heading ad-xx-section ad-section">
                    <h2 className="underline-effect">Why Choose Us</h2>
                    <p>Kainskep Solutions helps organizations to transform their legacy applications to become more agile and efficient in the cloud.</p>
                </div>
            </div>
            <div className="container am-section am-six">
                <div className="row gx-5 xs-gap">
                    <div className="col-12 col-sm-6">
                        <div className="am2card ms-auto">
                            <div>
                                <h3>Deploy enterprise applications on hybrid cloud platforms</h3>
                                <p>It helps to improve efficiency by automating operations in hybrid multi-cloud environments. This leads to “Build Once and Deploy on Any Cloud”.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="am2card">
                            <div>
                                <h3>Reduces Integration and Build Time</h3>
                                <p>DevOps principles facilitate multiple code streams and their integration into one. Entire integration cycle can be integrated without worrying about the changes in the current environment since the last deployment.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <Footer />


        </div>
    )
}