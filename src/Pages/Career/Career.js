import { React, useEffect, useRef, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import heroimg from "../../assets/images/career.png";
import { IoClose, IoLocationOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { BsBagPlus } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { useFormik } from 'formik';
import * as yup from 'yup';
import "yup-phone";
import { Link, useRouteMatch, useSearchParams } from 'react-router-dom';
import './Career.scss'
import { FileUpload } from 'primereact/fileupload';
import { Avatar } from 'primereact/avatar';

const Career = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown1: true,
    dropdown2: true
  })

  const [isShowForm, setIssShowForm] = useState(false)
  const [query, setQuery] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  const clickDrop1 = useRef()
  const clickDrop2 = useRef()
  const closeDropDown = (event) => {
    if (!clickDrop1.current.contains(event.target) && !clickDrop2.current.contains(event.target)) {
      setIsDropdownOpen({ dropdown1: true, dropdown2: true })
    }
  }

  useEffect(() => {

    window.addEventListener('click', closeDropDown)
    return () => {
      window.removeEventListener('click', closeDropDown)
    }
  }, [])


  useEffect(() => {
    if (query) {
      setSearchParams(query)
    }
  }, [query])
  // console.log(isDropdownOpen1)

  return (
    <div>
      <div>
        <header className="abx-sticky-header" >
          <Nav />
        </header>
        <div className="hero-image">
          <Hero heroimg={heroimg} maintx={"Career"} />
        </div>
        <div style={{ background: "#f8f8f8", overflowX: "hidden" }}>
          <div className="career-box" style={{ background: "#f8f8f8" }}>
            <h1 className="career-heading cr-title">So, what’s your passion?</h1>
            <p className='career-para'>All Newers are like family to us and we are proud to have a culture that is inclusive, transparent, and where each one of us experiences the joy of working together to deliver something wonderful. Come, join us, and be a part of this family today</p>
            <div className="  commx-navigation">
              <div className="row b-row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-6 br-black br-black-first prime-icons cstm-dropdown" >
                  <div className="dropdown_menu" ref={clickDrop1} onClick={() => setIsDropdownOpen({ dropdown1: !isDropdownOpen.dropdown1, dropdown2: true })}>
                    <h3>Jobs</h3>
                    <div>
                      <FiChevronUp className={isDropdownOpen.dropdown1 ? "icon_translate" : "icon_translate2"} />
                    </div>
                    <ul className={`dropdown_list dropdown_list_a ${isDropdownOpen.dropdown1 ? "d_none" : "d_block"}`}>

                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, domain: "cloud" })}>Cloud pricing strategies</li>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, domain: "cloud" })}>C</li>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, domain: "cloud" })}>D</li>
                      {/* {initialData.map((val, index) => {
                        return (
                          <li className="dropdown_list_items" onClick={() => handleQuery("domain", val.domain)} key={index}>{val.domain}</li>
                        )
                      })} */}
                    </ul>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-4 col-sm-6 col-6 br-black prime-icons cstm-dropdown" >
                  <div className="dropdown_menu" ref={clickDrop2} onClick={() => setIsDropdownOpen({ dropdown1: true, dropdown2: !isDropdownOpen.dropdown2 })}>
                    <h3>Year</h3>
                    <div>
                      <FiChevronUp className={isDropdownOpen.dropdown2 ? "icon_translate" : "icon_translate2"} />
                    </div>
                    <ul className={`dropdown_list ${isDropdownOpen.dropdown2 ? "d_none" : "d_block"}`}>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, year: 2022 })}>Latest</li>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, year: 2022 })}>2021</li>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, year: 2022 })}>2020</li>
                      <li className="dropdown_list_items" onClick={() => setQuery({ ...query, year: 2022 })}>2019</li>
                      {/* {initialData.map((val, index) => {
                        return (
                          <li className="dropdown_list_items" onClick={() => handleQuery("year", val.year)} key={index}>{val.year}</li>
                        )
                      })} */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 br-black br-search-main">
                  <form action="" className='br-search-form'>
                    <label htmlFor="">
                      <BsSearch />
                    </label>
                    <input type="search" name="" id="input-search-query" placeholder='Search Here' />
                  </form>
                </div>
              </div>

            </div>


            <div className="career-cards custom-container2">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-12 my-4">
                  <div className="career-card rounded shadow-sm border-0" style={{ width: '100%', backgroundColor: "white" }}>
                    <h5><a href="#" className="text-dark text-decoration-none">Asistand Manager Service Delivery</a></h5>
                    <div className='abx'>
                      <div>
                        <BsBagPlus />
                      </div>
                      <div>
                        6-8year
                      </div>
                    </div>
                    <div className='abx'>
                      <div>
                        <IoLocationOutline />
                      </div>
                      <div>
                        Noida
                      </div>
                    </div>

                    {/* <div class="hover-text"> */}
                    {/* <a href="#"> */}
                    <Link to="/career/executive_resume_submit" target="_blank" className="hover-text">
                      <span className="valign">
                        <span className="name">Flash Animator</span>
                        <span className="cta"></span>
                      </span>
                    </Link>
                    {/* </div> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 my-4">
                  <div className="career-card rounded shadow-sm border-0" style={{ width: '100%', backgroundColor: "white" }}>
                    <h5><a href="#" className="text-dark text-decoration-none">Asistand Manager Service Delivery</a></h5>
                    <div className='abx'>
                      <div>
                        <BsBagPlus />
                      </div>
                      <div>
                        6-8year
                      </div>
                    </div>
                    <div className='abx'>
                      <div>
                        <IoLocationOutline />
                      </div>
                      <div>
                        Noida
                      </div>
                    </div>

                    {/* <div class="hover-text"> */}
                    <Link to="/career/executive_resume_submit" target="_blank" className="hover-text">
                      <span className="valign">
                        <span className="name">Flash Animator</span>
                        <span className="cta"></span>
                      </span>
                    </Link>
                    {/* </div> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 my-4">
                  <div className="career-card rounded shadow-sm border-0" style={{ width: '100%', backgroundColor: "white" }}>
                    <h5><a href="#" className="text-dark text-decoration-none">Asistand Manager Service Delivery</a></h5>
                    <div className='abx'>
                      <div>
                        <BsBagPlus />
                      </div>
                      <div>
                        6-8year
                      </div>
                    </div>
                    <div className='abx'>
                      <div>
                        <IoLocationOutline />
                      </div>
                      <div>
                        Noida
                      </div>
                    </div>

                    {/* <div class="hover-text"> */}
                    <Link to="/career/executive_resume_submit" target="_blank" className="hover-text">
                      <span className="valign">
                        <span className="name">Flash Animator</span>
                        <span className="cta"></span>
                      </span>
                    </Link>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="career-box-2 text-center">
            <h3>Excited to work with us...But don't see your positions listed?</h3>
            <button className="mt_bt" onClick={() => setIssShowForm(true)}>Send Your Resume</button>
          </div>
          <div className="career-box-3">
            <div className='head'>
              <h3 className="underline-effect">Our Recruitment Team</h3>
            </div>
            <div className="recurte-heading row">
              <div className="col-md-4 col-sm-6 col-12">
                <Avatar image="/images1_5/girl.png" className="mr-2" size="xlarge" shape="circle" />
                <div className='avatar-label'>
                  <h4>Perry Hofman</h4>
                  <p>Corporate Recruiter</p>
                  <div>
                    <a href="" className='button button--ghost linkedin-button'>Linkedin</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <Avatar image="/images1_5/girl.png" className="mr-2" size="xlarge" shape="circle" />
                <div className='avatar-label'>
                  <h4>Perry Hofman</h4>
                  <p>Corporate Recruiter</p>
                  <div>
                    <a href="" className='button button--ghost linkedin-button'>Linkedin</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <Avatar image="/images1_5/girl.png" className="mr-2" size="xlarge" shape="circle" />
                <div className='avatar-label'>
                  <h4>Perry Hofman</h4>
                  <p>Corporate Recruiter</p>
                  <div>

                    <a href="" className='button button--ghost linkedin-button'>Linkedin</a>
                  </div>
                </div>
              </div>

            </div>
            {/* <div>
              <img src="/images/career/react.png" alt="" />
            </div>
            <div>
              <img src="https://www.tothenew.com/sites/default/files/2022-02/glassdoor.svg" alt="" />
            </div>
            <div>
              <img src="https://www.tothenew.com/sites/default/files/2022-02/glassdoor.svg" alt="" />
            </div>
            <div>
              <img src="https://www.tothenew.com/sites/default/files/2022-02/glassdoor.svg" alt="" />
            </div> */}
          </div>
          <div className="career-box-4 custom-container2">
            <div className="our-values">
              <h3 className='cr-title'>Our Values</h3>
              <p>We are quite vocal and fanatical about our values</p>
              <div>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-12 my-4">
                    <div className="career-card-2 rounded  border-0" style={{ width: '100%', backgroundColor: "white" }}>
                      <div className="card-logo text-center">
                        <img src="/images/career/logo1.png" alt="img-logo" className="imglogo-values" />
                      </div>
                      <h3>Authencity</h3>
                      <ul className='text-center list-unstyled'>
                        <li>I mean what I say and do</li>
                        <li>I own my mistakes and weaknesses</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 my-4">
                    <div className="career-card-2 rounded shadow-sm border-0" style={{ width: '100%', backgroundColor: "white" }}>
                      <div className="card-logo text-center">
                        <img src="/images/career/logo2.png" alt="img-logo" className="imglogo-values" />
                      </div>
                      <h3>Authencity</h3>
                      <ul className='text-center list-unstyled'>
                        <li>I mean what I say and do</li>
                        <li>I own my mistakes and weaknesses</li>
                      </ul>
                      <div className="hover-text d-none">
                        <a href="#">
                          <span className="valign">
                            <span className="name">Flash Animator</span>
                            <span className="cta"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 my-4">
                    <div className="career-card-2 rounded shadow-sm border-0" style={{ width: '100%', backgroundColor: "white" }}>
                      <div className="card-logo text-center">
                        <img src="/images/career/logo3.png" alt="img-logo" className="imglogo-values" />
                      </div>
                      <h3>Authencity</h3>
                      <ul className='text-center list-unstyled'>
                        <li>I mean what I say and do</li>
                        <li>I own my mistakes and weaknesses</li>
                      </ul>
                      <div className="hover-text d-none">
                        <a href="#">
                          <span className="valign">
                            <span className="name">Flash Animator</span>
                            <span className="cta"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>

      </div>
      {
        isShowForm ? <SumbitApplication setIssShowForm={setIssShowForm} /> : ""
      }


    </div>
  )
}


// -----------child-component-for form open-----------
const SumbitApplication = ({ setIssShowForm }) => {
  const ref = useRef()
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    skill: "",
    file: null
  }

  const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      name: yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Please Enter Your Name'),
      email: yup.string().email('Invalid email').required('Please Enter Your Email'),
      phone: yup.string().phone('IN', true, 'Phone is invalid').required("Please Enter Your Phone number"),
      skill: yup.string().required("Enter Your Skills"),
      file: yup.mixed().required('A file is required').test('fileFormat', 'PDF only', (value) => {
        return value && ['application/pdf'].includes(value.type);
      }),
    }),
    onSubmit: (values, action) => {
      // setData(values)
      action.resetForm()
      ref.current.value = ""
      // Form.reset()
    }
  })

  const onUpload = () => {
    // toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    alert("upload successful")
  }

  // const handleInputFileClick = (e) => {
  //   let reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       // setFieldValue("file",reader.result)
  //     }
  //   }
  //   reader.readAsDataURL(e.target.files[0])
  // }

  return (
    <>
      <div className="submit-resume">
        <div className="form wrapper">
          <div className='close-icon' onClick={() => setIssShowForm(false)}>
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
            <div className="skill input-data">
              <input type="text" name='skill' value={values.skill} onChange={handleChange} onBlur={handleBlur} placeholder=' ' className='cx-input' />
              <div className="underline"></div>
              <label className='cx-inlabel'>Skill</label>
              {errors.skill && touched.skill ? <p className='warning_errors'>{errors.skill}</p> : null}
            </div>
            <div className="resume my-4 prime-icons">
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

export default Career