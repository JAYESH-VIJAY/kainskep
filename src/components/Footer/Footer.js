import React from "react";
import Wlogo from "../../assets/images/white_logo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsTwitter, BsStarFill } from "react-icons/bs";
import "./Footer.scss";
export default function Footer() {
  function sendMailToAskOffers() {
    var email = document.getElementById("emailoffers").value;
    var subject = "To%20Ask%20More%20Queries%20and%20details";
    var body =
      "Hi,%0D%0A%0D%0AMy%20Queries:%20" +
      email +
      "%0D%0A%0D%0AI%20Want%20to%20ask%20more%20about%20your%20company.%0D%0A%0D%0A";

    if (email == "") {
      alert("Enter your Message");
    } else {
      window.open(
        "mailto:info@kainskep.com?subject=" + subject + "&body=" + body
      );
    }
  }
  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset > 1800) {
  //     if (document.getElementsByClassName("contactus")[0].classList.contains('contactus-animation')) {
  //       console.log("class exist");
  //     } else {
  //       console.log("class not exist");
  //       document.getElementsByClassName("contactus")[0].classList.add('contactus-animation')
  //     }
  //   }
  // })
  return (
    <div className="main_footer">
      <div className="footer">
        <div className="row">
          <div className=" about section col-md-4 col-sm-12 col-12">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Wlogo} className="top" />
            </Link>
            <div className="icons">
              <div>
                <img src="/images/footer/insta.svg" alt="" />
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/kainskep-solutions/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <img src="/images/footer/linkedin.svg" alt="" />
                </a>
              </div>
              <div>
                <img src="/images/footer/twitter.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="linksection linsection-first section col-md-4 col-sm-6 col-6">
            <div className="links">
              <p className="top2">
                <Link to="/contact" style={{ textDecoration: "none" }}>Contact Us</Link>
              </p>
              <p className="links_para2">
                <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </p>
              <p className="links_para2">
                <Link to="/terms-condition" style={{ textDecoration: "none" }}>
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <div className="linksection section linksection-address col-md-4 col-sm-6 col-6">
            <div className="contact">
              <span>
                <a
                  href="mailto:info@kainskep.com"
                  className="text-decoration-none"
                >
                  <FaEnvelope style={{ fill: "#0bb4e5" }} /> &nbsp;
                  info@kainskep.com
                </a>
              </span>
              <span>
                <a href="tel:+91-9509101669" className="text-decoration-none text-white">
                  <FaPhoneAlt style={{ fill: "#0bb4e5" }} />
                  &nbsp; +91-9509101669
                </a>
              </span>
              <span className="footer_address">
                <a
                  href="https://goo.gl/maps/U8VV9LKHHvVYFjQ56"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <FaLocationArrow style={{ fill: "#0bb4e5" }} /> &nbsp; 44,
                  Ayodhya Colony, Hira Nagar, Ajmer Rd, opp. Chitrakoot, Jaipur,
                  Rajasthan 302021
                </a>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contactus" data-aos="fade-up">
        <p className="top3">
          We love conversations lets Connect!
        </p>
        {/* <div className="msg">
          <div className="input">
            <textarea
              type="email"
              placeholder="Send a Message"
              id="emailoffers"
            ></textarea>
          </div>
          <div>
           
          </div>
        </div> */}
        <div className="msg-box">
          <div className="input-bxx">
            <textarea
              type="email"
              placeholder="Type Your Message"
              id="emailoffers"
            ></textarea>
          </div>
          <div className="btns">
            <div className="firstbtn f-btns">
              <button className="cursorStyle" onClick={sendMailToAskOffers}>
                Send
              </button>
            </div>
            <div className="secondbtn f-btns">
              <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                <button className="cursorStyle">
                  Contact Us
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <div className="atbottom">
        <p>© 2022 Kainskep Solutions </p>
      </div>
    </div>
  );
}
