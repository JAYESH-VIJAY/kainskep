import { React, useRef, useState } from 'react'
import Nav from '../../../components/Nav/Nav'
import Hero from "../../../components/Hero/Hero";
import heroimg from '../../../assets/images/Case_Study.jpg'
import Footer from "../../../components/Footer/Footer";
import { useFormik } from 'formik';
import './SubmitResume.scss'
import GoToTop from '../../../components/GoToTop/GoToTop';
import schema from './Validation';
import { GrFormClose } from 'react-icons/gr';
const SubmitResume = () => {
    const [show, setShow] = useState(false)
    const showContent = () => {
        setShow(true)
    }

    return (
        <div className="main-section-sbr">
            <header className="abx-sticky-header" >
                <Nav />
            </header>
            <div className="hero-image">
                <Hero heroimg={heroimg} maintx={"Career"} />
            </div>

            <div className="sbr-text send-resume-text">
                <div className="headng text-center sbr-section">
                    <h1 className='text-center'>Full Stack Engineer</h1>
                    <p>At Appwrite we're looking for a Full Stack Engineer to join our team. </p>
                </div>
                <div className="about-the-job sbr-section sbrx-section">
                    <h2>About the job</h2>
                    <p>Appwrite is looking for a Fullstack Engineer to build reliable, performant, and scalable APIs and dashboards in an advanced Docker microservice architecture that developers would love to use. It would help if you had a solid understanding of HTTP, TCP, UDP protocols, web services, and an excellent eye for architecture design. Experience with multiple back-end languages (PHP, Node.js, Python, Dart, Go, Deno, or Ruby) can be an advantage.</p>
                    <p>As an Appwrite software engineer, you would also play a major role in our open-source community, engaging with developers who use our products all around the world.</p>
                </div>
                <div className="rsponsibility sbr-section sbrx-section respn">
                    <h2>Responsibilities</h2>
                    <ul>
                        <li>Responsible for ideation and creation of social media content for various platforms such as Twitter, Facebook, LinkedIn etc </li>
                        <li>Creation of info-graphics and video scripts for social media posts</li>
                        <li>Responsible for writing, editing, and proofreading for websites</li>
                        <li>Work alongside other copywriters and marketers and collaborate with designers, technical teams to get the desired results</li>
                        <li>Assist in creating and maintaining content calendar</li>
                        <li>Slice and dice content in different formats including .GIF, video, PPTs, PDFs etc</li>
                        <li>Should be able to research and investigate facts for Digital/Social media content</li>
                        <li>Should propose new content formats basis new trends and platform developments</li>

                    </ul>
                </div>
                <div className="reusability sbr-section sbrx-section respn">
                    <h2>Requirement</h2>
                    <ul>
                        <li>Responsible for ideation and creation of social media content for various platforms such as Twitter, Facebook, LinkedIn etc </li>
                        <li>Creation of info-graphics and video scripts for social media posts</li>
                        <li>Responsible for writing, editing, and proofreading for websites</li>
                        <li>Work alongside other copywriters and marketers and collaborate with designers, technical teams to get the desired results</li>
                        <li>Assist in creating and maintaining content calendar</li>
                        <li>Slice and dice content in different formats including .GIF, video, PPTs, PDFs etc</li>
                        <li>Should be able to research and investigate facts for Digital/Social media content</li>
                        <li>Should propose new content formats basis new trends and platform developments</li>

                    </ul>
                </div>
                <div className="applyjob sbr-section sbrx-section">
                    <h2>Apply for the job</h2>
                    <p>Do you want to join our team as our new Full Stack Engineer? Then we'd love to hear about you!</p>
                    <div className="btton">
                        <button className="mt_bt" onClick={showContent}>Apply now</button>
                    </div>
                </div>
            </div>
            {
                show ? <ResumeSendForm setShow={setShow} /> : ""
            }

            <Footer />
        </div>
    )
}

// -----------child-component-for form open-----------
const ResumeSendForm = ({ setShow }) => {
    const ref = useRef();
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        url: "",
        file: null
    }


    const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values)
            // setData(values)
            action.resetForm()
            ref.current.value = ""
            // Form.reset()
        }
    })
    return (
        <>
            <div className="submit-resume popup-form">

                <div className="form wrapper">
                    <div className='close-icon' onClick={() => setShow(false)}>
                        {/* <IoClose/> */}
                        <GrFormClose />
                    </div>
                    <h4>Submit Your Application</h4>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="name input-data">
                            <input type="text" id="axx" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=' ' className='cx-input' />
                            <div className="underline"></div>
                            <label className='cx-inlabel'>Name</label>
                            {errors.name && touched.name ? <p className='warning_errors'>{errors.name}</p> : null}
                        </div>
                        <div className="email input-data">
                            <input type="text" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder=' ' className='cx-input' />
                            <div className="underline"></div>
                            <label className='cx-inlabel'>Email</label>
                            {errors.email && touched.email ? <p className='warning_errors'>{errors.email}</p> : null}
                        </div>
                        <div className="phone input-data ">
                            <input type="text" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder=' ' className='cx-input' />
                            <div className="underline"></div>
                            <label className='cx-inlabel'>Phone</label>
                            {errors.phone && touched.phone ? <p className='warning_errors'>{errors.phone}</p> : null}
                        </div>
                        <div className="linkedin-url input-data">
                            <input type="text" name="url" className='cx-input' placeholder=' ' id='exampleInputxUrl' value={values.url} onChange={handleChange} onBlur={handleBlur} />
                            <div className="underline"></div>
                            <label className='cx-inlabel'>Linkedin Url</label>
                            {errors.url && touched.url ? <p className='warning_errors'>{errors.url}</p> : null}
                        </div>
                        <div className="resume my-4">
                            <input type="file" name="file" id="" onChange={(e) => setFieldValue("file", e.target.files[0])} ref={ref} />
                            {errors.file && touched.file ? <p className='warning_errors'>{errors.file}</p> : null}
                        </div>
                        <div className="text-center">
                            <button type="submit" className='button button--ghost text-center button-submit'>Submit Resume</button>
                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}

export default SubmitResume