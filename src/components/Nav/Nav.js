import React, { useEffect } from "react";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/white_logo.png";
import Logo2 from "../../assets/images/logo.png";
import "./nav.scss";

export default function Nav(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const showDropdown = () => {
    if (window.innerWidth > 900) {
      document.getElementById("fullview").style.display = "block";
      document
        .getElementById("dpdown")
        .addEventListener("mouseleave", hideDropdown);
    } else {
      document.getElementById("fullview").style.display = "none";
    }
  };

  const hideDropdown = () => {
    document.getElementById("fullview").style.display = "none";
  };

  const toggleclick = () => {
    document.getElementById("nav-toggle").click();
  };

  const myFunction = () => {
    hideDropdown();
    //toggleclick();
  };

  useEffect(() => {
    // Begin jQuery

    $(function () {
      // DOM ready

      // Toggle open and close nav styles on click
      $("#nav-toggle").click(function () {
        $("nav ul").slideToggle();
      });
      // Hamburger to X toggle
      $("#nav-toggle").on("click", function () {
        this.classList.toggle("active");
        if (
          document.getElementById("nav-toggle").classList.contains("active")
        ) {
          hideDropdown();
        }
      });
    }); // end DOM ready
  }, []); // end jQuery




  return (
    <section className="navigation" onLoad={myFunction}>
      <div className="nav-container">

        <div className="logo logo1">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="logo logo2">
          <Link to="/">
            <img src={Logo2} alt="" />
          </Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li className={`link ${currentPath === "/" && 'active'}`}>
              <Link to="/" onClick={toggleclick}>
                Home
              </Link>
            </li>
            <li className={`link ${currentPath === "/about" && 'active'}`}>
              <Link to="/about" onClick={toggleclick}>
                About
              </Link>
            </li>
            <li id="dpdown" className={`link3 ${currentPath === "/services" && 'active'}`}>
              <Link
                to="/services"
                style={{ cursor: "pointer" }}
                id="dp_link"
                onMouseEnter={showDropdown}
                onClick={toggleclick}
              >
                Services
              </Link>

              <ul className="nav-dropdown" id="fullview">
                <li className="link2">
                  <Link to="/services/app-modernization-cloud-native">
                    App Modernization and Cloud Native
                  </Link>
                </li>
                <li className="link2">
                  <Link to="/services/cloud-transformation">Cloud Transformation</Link>
                </li>
                <li className="link2">
                  <Link to="/services/devops-and-automation">Devops and Automation</Link>
                </li>
                <li className="link2">
                  <Link to="/services/application-development-and-management">
                    Application Development and Management
                  </Link>
                </li>
                <li className="link2">
                  <Link to="/services/data-analytics">Data and Analytics</Link>
                </li>
              </ul>
            </li>
            {/* <li className={`link ${currentPath === "/products" && 'active'}`}>
              <Link to="/products" onClick={toggleclick}>
                Products
              </Link>
            </li> */}
            {/* -------------------------update---------- */}
            <li className={`link ${currentPath === "/blog" && 'active'}`}>
              <Link to="/blog" onClick={toggleclick}>
                Blog
              </Link>
            </li>
            <li className={`link ${currentPath === "/casestudy" && 'active'}`}>
              <Link to="/casestudy" onClick={toggleclick}>
                {/* Case Study */}
                CaseStudy
              </Link>
            </li>
            <li className={`link ${currentPath === "/career" && 'active'}`}>
              <Link to="/career" onClick={toggleclick}>
                Career
              </Link>
            </li>

            {/* <li className="contact_btn">
                            <Link to="/" onClick={toggleclick} ><button >Contact Us</button></Link>
                        </li> */}
          </ul>
        </nav>
      </div>
    </section>
  )
}
