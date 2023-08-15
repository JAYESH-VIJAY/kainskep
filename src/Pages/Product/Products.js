import React from "react";
import Navbar from "../../fractions/Nav/Nav";
import Hero from "../../fractions/Hero/Hero";
import Footer from "../../fractions/Footer/Footer";
import heroimg from "../../assets/images/images/products.webp";

export default function Products() {
  return (
    <div>
      <Navbar />
      <Hero
        heroimg={heroimg}
        maintx={"Our Products"}
        subtx={
          "Employee engagement is the emotional connection which an employee feels towards their organization, that influences their level of effort in work-related activities. The main purpose of employee engagement is to create a work environment where employees love and care about their work."
        }
      />
      <div className="main_products main">
        <p>
          Disengaged employees can hurt your business, big time. They may be
          costing your company more money than you think. We built Empcare
          because we know that when you appreciate and take care of your
          employees, they'll take care of your business.
        </p>
        <div className="product_card">
          <img src="/images6_10/empcare.png" />
          <p>
            <b className="welfare">Empcare - Employee Welfare Solution</b>
            <br />
            Add value to your employees for better productivity with our unified
            employee engagement and welfare system.
          </p>
          <a href="https://empcare.in" target="_blank">
            <button className="mt_bt cursorStyle">Learn more</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
