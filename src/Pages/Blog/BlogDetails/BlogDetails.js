import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Hero from "../../../components/Hero/Hero";
import heroimg from "../../../assets/images/Case_Study.jpg";
import { useParams } from "react-router-dom";
import "./BlogDetails.scss";
import axios from "axios";
import fetchApi from "../../../Api/Api";
import Spinner from "../../../components/Spinner/Spinner";
const url = "http://20.169.135.67:5000/blog";
const BlogRedirect = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getContextId = async (id) => {
    const finalUrl = url + "/" + id;
    // console.log(finalUrl);
    const res = await fetchApi(finalUrl);
    // console.log(res.data);
    if (res.data) {
      setData(res.data);
    } else {
      console.log(res)
    }
  };

  useEffect(() => {
    // console.log(value.state)
    const id = localStorage.getItem("id");
    getContextId(id);
    localStorage.removeItem("id");
  }, []);
  // console.log(id)
  // console.log(data)
  if (!data.length) {
    return <Spinner />;
  }

  return (
    <div>
      {/* --------------header----------- */}
      <header className="abx-sticky-header">
        <Nav />
      </header>
      {/* -----------hero-section------------ */}
      <div className="hero-image">
        <Hero heroimg={heroimg} maintx={`${id}`} />
      </div>
      <div className="brt-page">
        <div className="brt-container container-fluid">
          <div className="row">
            {/* ------------left-content-part---------- */}
            <div className="col-md-8 brt-left" id="brt-axbx">
              <div className="brt-content">
                {data.map((val, index) => {
                  return (
                    <div key={index}>
                      <h3>{val.heading}</h3>
                      <div className="image">
                        <img src={val.img} alt="cofeeImage" />
                      </div>
                      <div>
                        <p style={{ whiteSpace: "pre-line" }}>{val.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* -------right-part--------- */}
            <div className="col-md-4 brt-right">
              <div className="cc-axb-first">
                <figure>
                  <img
                    src="/images/BlogDetails/icon.png"
                    alt="imagenotallowed"
                  />
                </figure>
                <div>
                  <h4>Written By</h4>
                  <p className="clr">Arjun Sharma</p>
                  <p>Date:- 07-Nov-2022</p>
                </div>
              </div>
              <div className="cc-axb-second">
                <p>You May Also Like</p>
                <ul>
                  <li className="clr">AEM Integration with Spring</li>
                  <li className="clr">
                    Integrate SwaggerUI with spring boot application
                  </li>
                  <li className="clr">Quick start with Springboot using CLI</li>
                </ul>
              </div>
              {/* <div className="cc-axb-third">
                <figure>
                  <img
                    src="/images/BlogDetails/type.png"
                    alt="imagenotallowed"
                  />
                </figure>
                <div>
                  <h4>Choose Type ?</h4>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <div className="drp-down prime-icons">
                      <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
                    </div>
                    <div className="drp-down prime-icons">
                      <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
                    </div>
                  </div>
                  <div className="bx">
                    <button className="mt_bt">Search</button>
                  </div>
                  <div className="bx bx2">
                    <button className="mt_bt">Subscribe Blog</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogRedirect;
