import React from "react"
import Navbar from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer'
import Hero from '../../../components/Hero/Hero'
import heroimg from "../../../assets/images/cloud-transformation.png";
import './Cloud.scss'
import { BsCloudFog2 } from "react-icons/bs";

export default function PrivacyPolicies() {

    return (
        <div>
            <header className="abx-sticky-header" >
                <Navbar />
            </header>
            <div className="hero-image">
                <Hero heroimg={heroimg} maintx={"Cloud Transformation"} />
            </div>
            {/* ------------1------------------- */}
            <div className="cl-first cl-section  container">
                <p>Industry accepted tools can accelerate the assessment, analysis and migration process, but what to use, when to use and how to use comes only from experience of an expert cloud migration engineer. Tools clubbed with proficient SMEs with their knowledge collected by tried and tested methods and best practices, together will only yield fruitful results.</p>
            </div>
            {/* -------2------- */}
            <div className="cl-second cl-section  container">
                <div className="row">
                    <div className="first col-lg-5 col-12">
                        <img src="/images/AllService/cl1.png" alt="imagenotallowed" className="imgcllgscreen" />
                        <img src="/images/AllService/cl1-1.svg" alt="imagenotallowed" className="imgclsmllscreen" />
                    </div>
                    <div className="second col-lg-7 col-12">
                        <h2 className="underline-effect">Cloud Transformation</h2>
                        <h4>How do we do it? people, process, technology and economics</h4>
                        <p>Most organizations are in some type of transformation mode, trying out new technologies and platforms with minimal planning. A comprehensive strategy and roadmap sets the stage for informed choices that mitigate risk, optimize financial investments, and integrate seamlessly over time. We bring a holistic perspective to cloud transformation that leverages the evolving nature of IT infrastructure and data management in an increasingly hybrid world. This includes advanced technologies such as hybrid cloud, software-defined infrastructure, and AI/ML-based analytics. Our methodology applies planning, foresight, communication, and strategy development to help you get the full value of whichever solutions you employ. Envision & plan — We ground our work by developing or refining a cloud strategy that syncs business lines and IT groups. Build & optimize — We deploy and enable the new architecture, operationalizing the cloud. Manage & advance — We help ensure the new environment is not only manageable but helpful in driving your transformation.</p>
                    </div>
                </div>
            </div>
            {/* ----------3--------
             */}
            <div className="cl-third cl-section container-fluid">
                {/* <img src="/images/AllService/cl2.png" alt="" /> */}
                <div className="cl-third-x">

                </div>
                <div className="cl-third-y">
                    <p>
                        “We bring a holistic perspective to cloud transformation that leverages the evolving nature of IT infrastructure and data management in an increasingly hybrid world.”
                    </p>
                </div>
            </div>
            {/* ------------------4------------- */}
            <div className="cl-four cl-section container-fluid">
                <img src="/images/AllService/cl3.png" alt="" />
            </div>
            {/* -----------5------------------ */}
            <div className="cl-five cl-section  container">
                <p>While there will inevitably be a point when cloud models and DevOps tools have been implemented, a cloud adoption roadmap is really a never-ending journey for continuous improvement. By the time a cloud adoption timeline has been completed, there will be new technologies and new paths for cloud optimization already on the horizon. A solution you implemented may need to be deprecated in favor of something that works a little better. A valuable part of iteration is making decisions and acting quickly, and that is a process that never ends</p>
            </div>
            {/* ----------------6----------- */}
            <div className="cl-six cl-section  container ad-xx-section">
                <h2 className="underline-effect">Why Choose Us</h2>
                <p>Kainskep Solutions helps organizations to transform their legacy applications to become more agile and efficient in the cloud.</p>

            </div>
            <Footer />

        </div>
    )
}