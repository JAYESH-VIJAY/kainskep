
import React, { useMemo, useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import heroimg from "../../assets/images/Blog.png";
import { FiChevronUp } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
// import  useSearchParams  from "react-router-dom";
import { Paginator } from 'primereact/paginator';
import axios from 'axios';
import './Blog.scss'
import Spinner from '../../components/Spinner/Spinner';

const url = "http://20.169.135.67:5000/blog"
const Blog = () => {
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);
  const [query, setQuery] = useSearchParams()
  const [renderData, setRenderData] = useState([])
  const [initialData, setInitialData] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown1: true,
    dropdown2: true
  })
  const clickDrop1 = useRef()
  const clickDrop2 = useRef()
  const inputData = useRef()

  const handleChangePage = (id) => {
    localStorage.setItem("id", id)
  }
  const closeDropDown = (event) => {
    if (!clickDrop1.current.contains(event.target) && !clickDrop2.current.contains(event.target)) {
      setIsDropdownOpen({ dropdown1: true, dropdown2: true })
    }
  }
  const getApiData = async () => {
    try {
      const data = await axios.get(url)
      // console.log(data.data)
      setRenderData(data.data)
      setInitialData(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const changePages = async (page) => {
    try {
      const data = await axios.get(`${url}?page=${page}`)
      // console.log(data)
      setRenderData(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleSearchData = async (x) => {
    try {
      const data = await axios.get(`${url}?search=${x}`)
      // console.log(data)
      setRenderData(data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const filterApiData = async () => {
    // console.log("call filter api data")
    try {
      if (query.get("year") && query.get("domain")) {
        const data = await axios.get(`${url}?year=${query.get("year")}&domain=${query.get("domain")}`)
        // console.log(data)
        setRenderData(data.data)
      }
      else if (query.get("year")) {
        const data = await axios.get(`${url}?year=${query.get("year")}`)
        // console.log(data.data)
        setRenderData(data.data)
      } else if (query.get("domain")) {
        const data = await axios.get(`${url}?domain=${query.get("domain")}`)
        setRenderData(data.data)
        // console.log(data.data)
      }
      else {
        setRenderData(initialData)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    filterApiData()
  }, [query])
  useEffect(() => {
    window.addEventListener('click', closeDropDown)

    return () => {
      window.removeEventListener('click', closeDropDown)
    }
  }, [])
  useEffect(() => {
    getApiData()
  }, [])

  const renderBlog = renderData.map((val, index) => {

    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4 my-3" key={index}>
        <div className="card rounded shadow-sm border-0 blog-cards " style={{ width: '100%' }}>
          <h5> <a href="#" className="text-decoration-none">{val.title}</a></h5>
          <h4 className='blog-cards-head'> <Link to={`${val.domain.replaceAll(" ", "-").toLowerCase()}`} className="text-dark text-decoration-none blog-cards-head" target="_blank" onClick={() => handleChangePage(val._id)}>{val.domain}</Link>
          </h4>

          <p>{val.content}</p>
          <div>
            <p className='text-decoration-underline'>{val.author}</p>
            <p>{val.year}</p>
          </div>
        </div>
      </div>
    )
  })

  const onBasicPageChange = (event) => {
    // console.log(event)
    setBasicFirst(event.first);
    setBasicRows(event.rows);
    handleQuery("page", event.page + 1)
    changePages(event.page + 1)
  }


  const handleQuery = (a, b) => {
    query.delete("search")
    const copy = new URLSearchParams(query)
    copy.set(a, b)
    setQuery(copy)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputData.current.value
    setQuery({ "search": value })
    handleSearchData(value)
  }

  if (!renderData.length) {
    return <Spinner />
  }
  return (
    <div className='blog-page'>
      {/* ------------header------------ */}
      <header className="abx-sticky-header" >
        <Nav />
      </header>
      {/* -------------hero-section------------ */}
      <div className="hero-image">
        <Hero heroimg={heroimg} maintx={"Our Blogs"} />
      </div>
      {/* ----------blog-page-container--------------- */}
      <div style={{ background: "#f6f4f4" }} className="blog-page-container">

        {/* ------------blog-dropdown-------------- */}
        <div className="  commx-navigation">
          <div className="row b-row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 br-black br-black-first prime-icons cstm-dropdown" >
              <div className="dropdown_menu" ref={clickDrop1} onClick={() => setIsDropdownOpen({ dropdown1: !isDropdownOpen.dropdown1, dropdown2: true })}>
                <h3>Domain</h3>
                <div>
                  <FiChevronUp className={isDropdownOpen.dropdown1 ? "icon_translate" : "icon_translate2"} />
                </div>
                <ul className={`dropdown_list dropdown_list_a ${isDropdownOpen.dropdown1 ? "d_none" : "d_block"}`}>
                  {/* 
                  <li className="dropdown_list_items" onClick={() => handleQuery("domain", "Cloud pricing strategies")}>Cloud pricing strategies</li>
                  <li className="dropdown_list_items" onClick={() => handleQuery("domain", "C")}>C</li>
                  <li className="dropdown_list_items" onClick={() => handleQuery("domain", "D")}>D</li> */}
                  {initialData.map((val, index) => {
                    return (
                      <li className="dropdown_list_items" onClick={() => handleQuery("domain", val.domain)} key={index}>{val.domain}</li>
                    )
                  })}
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
                  {/* <li className="dropdown_list_items" onClick={() => handleQuery("year", "Latest")}>Latest</li>
                  <li className="dropdown_list_items" onClick={() => handleQuery("year", "2021")}>2021</li>
                  <li className="dropdown_list_items" onClick={() => handleQuery("year", "2020")}>2020</li>
                  <li className="dropdown_list_items" onClick={() => handleQuery("year", "2019")}>2019</li> */}
                  {initialData.map((val, index) => {
                    return (
                      <li className="dropdown_list_items" onClick={() => handleQuery("year", val.year)} key={index}>{val.year}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 br-black br-search-main">
              <form action="" className='br-search-form' onSubmit={handleSubmit}>
                <label htmlFor="">
                  <BsSearch />
                </label>
                <input type="search" name="" id="input-search-query" placeholder='Search Here' ref={inputData} />
              </form>
            </div>
          </div>

        </div>
        {/* -----------------blog-cards-------------- */}

        <div className="my-4 bs-r-px custom-container2">
          <div className="row">
            {renderBlog}
          </div>
        </div>
        {/* --paginator----- */}
        <div className="paginator prime-icons my-1">
          <Paginator first={basicFirst} rows={basicRows} totalRecords={40} onPageChange={onBasicPageChange}></Paginator>
        </div>

        {/* --------------footer----------- */}
        <Footer />
      </div>
    </div>
  )
}

export default Blog