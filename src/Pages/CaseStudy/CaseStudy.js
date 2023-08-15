import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import heroimg from "../../assets/images/Case_Study.jpg";
import { AiOutlineHome } from "react-icons/ai";
import { Dropdown } from 'primereact/dropdown';
import './CaseStudy.scss'
import { useSearchParams } from 'react-router-dom';
import { get } from 'jquery';
import Spinner from "../../components/Spinner/Spinner"
import axios from 'axios';
const apiUrl = "http://20.169.135.67:5000/casestudy";
const CaseStudy = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [isClick, setIsClick] = useState({ id: "All" })
  const [isdrpDown, setIsDrpDown] = useState({ name: 'All', icon: "" })
  const [query, setQuery] = useSearchParams()
  const filterItems = (category) => {
    let qry = category.toLowerCase()
    setIsClick({ id: category })
    if (category == "All") {
      setFilterData(data)
      setQuery({})
    }
    else {
      setQuery({ "name": qry })
    }
  }
  const changeCaptelize = () => {
    let a = query.get("name");
    let b = a.split(" ")
    let x = ""
    b.forEach((val) => {
      if (x) {

        x = x + " " + val.charAt(0).toUpperCase() + val.slice(1)
      } else {
        x = val.charAt(0).toUpperCase() + val.slice(1)
      }

    })
    return x;
  }


  // console.log(query.get("name"))
  const getapiDataWithQuery = async () => {
    if (query.get("name")) {
      const resp = changeCaptelize()
      const url = apiUrl + "?domain=" + resp
      console.log("url", url)
      // const res = await axios.get(url)
      try {
        const res = await axios.get(url)
        console.log(res.data)
        setFilterData(res.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      setFilterData(data)
      setIsClick({ id: "All" })
    }
  }
  const drpdown = [
    { name: 'All', icon: "" },
    { name: "Digital Engineering", icon: "" },
    { name: "Cloud Devops", icon: "" },
    { name: "Data Anayltisc", icon: "" },
    { name: "Digital", icon: "" }
  ];
  const handleDrpDown = (e) => {
    setIsDrpDown(e.value)
    let val = e.value.name
    // console.log(val)
    filterItems(val)
  }
  const getapiData = async () => {
    // const res = await fetchApi(apiUrl)
    try {
      const res = await axios.get(apiUrl)
      // console.log(res.data)
      setData(res.data)
      setFilterData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const renderItems = filterData.map((item, index) => {
    return (
      <div className="col-md-4 col-sm-6 col-12 my-4" key={index}>
        <div className="card rounded shadow-sm border-0 card_container case-cardss" style={{ width: '90%' }}>
          <div className="card-body">
            <figure>
              <img src={item.image} alt="" className="img-fluid d-block mx-auto mb-3" style={{ width: "100%", height: "150px", objectFit: "cover", objectPosition: "center center" }} />
            </figure>
            <div className="logo-icon">
              <img src={item.logoImage} alt="franklin-templeton" title="franklin-templeton" typeof="Image" className='logo-icon-image' />
            </div>
            <h5 className='my-1 '> <a href="#" className='text-black text-decoration-none'>{item.logoTitle}</a></h5>
            <p className="small text-muted font-italic ">{item.description}</p>
            <div className="links">
              <a href="">{item.tags}</a>
              {/* <a href="">{item.tags[1]}</a> */}
            </div>
          </div>
          <div className="hover-text">
            <a href="#">
              <span className="valign">
                <span className="name ">{item.domain}</span>
                <span className="cta"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  })

  const pageRefresh = () => {
    if (query) {
      query.delete("name")
      setQuery(query)
    }
    setIsClick({ id: "All" })
  }
  useEffect(() => {
    getapiDataWithQuery()
  }, [query])
  useEffect(() => {
    // console.log("use effect run")
    getapiData()
  }, [])
  useEffect(() => {
    // window.location.reload()
    window.addEventListener("load", pageRefresh)
    return () => {
      window.removeEventListener("load", pageRefresh)
    }
  }, [])

  // if (!filterData.length) {
  //   return <Spinner />
  // }
  return (
    <div>
      <header className="abx-sticky-header" >
        <Nav />
      </header>
      <div className="hero-image">
        <Hero heroimg={heroimg} maintx={"Case Study"} />
      </div>

      <div style={{ backgroundColor: "#f5f3f3" }} >
        <div className="story-filter-tab " >
          <ul className="nav container">
            {
              drpdown.map((val, index) => {
                return (
                  <li className={`nav-item ${isClick.id == val.name ? "al-active" : "al-margin"} `} onClick={() => filterItems(val.name)} key={index}>
                    <AiOutlineHome />
                    <span className="filter-tab nav-link text-black">
                      {val.name}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div style={{ backgroundColor: "#f5f3f3", paddingTop: "5px" }} className="prime-dropdown-container">
          <div className='prime-dropdown prime-icons'>
            <Dropdown value={isdrpDown} options={drpdown} onChange={handleDrpDown} optionLabel="name" placeholder="" />"

          </div>
        </div>
        <div className="case-container">
          <div className='custom-container2'>

            <div className="row">
              {
                renderItems
              }

            </div>

          </div>
        </div>


        <Footer />
      </div>
    </div>
  )
}

export default CaseStudy