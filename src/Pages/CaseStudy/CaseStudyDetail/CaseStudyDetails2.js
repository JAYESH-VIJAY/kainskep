import React,{useState} from "react";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Hero from "../../../components/Hero/Hero";
import heroimg from "../../../assets/images/casestudydetails1.png";
import './CaseStudyDetails2.scss'
import { Accordion, AccordionTab } from 'primereact/accordion';
const CaseStudyDetails2 = () => {
    const [activeIndex, setActiveIndex] = useState();

  return (
    <>
     <div>
      {/* --------------header----------- */}
      <header className="abx-sticky-header">
        <Nav />
      </header>
      {/* -----------hero-section------------ */}
      <div className="hero-image casestudydetails-heroimage">
        <Hero heroimg={heroimg}/>
      </div>
   {/* ----------------------------------- */}
   <div className="am-section container d5section csdsection1">
            <div className="row">
               <div className="col-12 col-sm-4 numberical-section text-center">
                  <div className="number">01</div>
                  <h3 className="underline-effect">Discovery</h3>
                  <p >Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
               <div className="col-12 col-sm-4 numberical-section  text-center">
                  <div className="number">02</div>
                  <h3 className="underline-effect">Value Creation</h3>
                  <p >Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
               <div className="col-12 col-sm-4 numberical-section  text-center">
                  <div className="number">03</div>
                  <h3 className="underline-effect">Acceleration</h3>
                  <p >Explore the potential and power of Azure Data platform By implementing a pilot solution for key business use cases and realize the benefits </p>
               </div>
            </div>

         </div>

    <div className="problem am-section csdsection container">       
    <div className="row px-5 justify-content-center">
    <div className="col-md-8 all-ss-head all-ss text">
        <div>
        <h2>Solution</h2>
        <p>The Company had a large volume of data coming from various sources such as data APIs, excel sheets, and SFTP servers. The data was stored in a variety of formats and systems, making it difficult to access and analyze. The company needed a solution to consolidate and standardize the data so that it could be used for business intelligence and analytics.</p>

        </div>
        </div>
        <div className="col-md-4 image">
            <img src="/images/casestudydetails/1.png" alt="image"/>
        </div>
      
    {/* </div> */}
    </div>
    </div>
    <div className="solution am-section csdsection container">       
    <div className="row px-5 justify-content-center">
    <div className="col-md-4 image">
            <img src="/images/casestudydetails/2.png" alt="image"/>
        </div>
    <div className="col-md-8 all-ss-head all-ss text">
    <div className=" prime-icons">
     <h3>Solution:</h3>
  {/* card */}
   <Accordion activeIndex={activeIndex?activeIndex:0} onTabChange={(e) =>setActiveIndex(e.index)} >
                    <AccordionTab header="ENGAGING THE TARGET AUDIENCE">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionTab>
                    <AccordionTab header="ENGAGING THE TARGET AUDIENCE">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header="ENGAGING THE TARGET AUDIENCE">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>
                </Accordion>
   </div>
        </div>
      
      
    {/* </div> */}
    </div>
    </div>
    <div className="benfits-section am-section">
     <div className="head text-center ">
        <h2 className="underline-effect text-white">Benfits</h2>
     </div>
     <div className="row  text">
        <div className="col-md-4 text-white text-inside">The company was able to consolidate and standardize its data, making it easier to access and analyze.</div>
        <div className="col-md-4 text-white text-inside">Azure Data Factory allowed the company to automate the data integration process, reducing the time and effort required to maintain the data pipelines.</div>
        <div className="col-md-4 text-white text-inside">The company was able to use the centralized data store for business intelligence and analytics, which helped them make better-informed decisions and improve their operations.</div>
     </div>
     <div className="text-outer text-white text">
        <p className="text-white">
     This is just one example of how Azure Data Factory can be used to address data integration needs. You can also use it for scenarios such as data migration, data lake ingestion, and real-time data integration.
        </p>
     </div>
     </div>
    <div className="why-choose-us am-section all-ss ad-section ad-xx-section">
  <h3 className="underline-effect">Why Choose Us</h3>
  <p className="text-center">Kainskep Solutions helps modern organizations to address their data-related needs from building Cloud architecture, real-time data collection, processing, database management, data analytics to business intelligence (BI), Machine Learning (ML) and Artificial Intelligence (AI).
</p>
    </div>

      <Footer />
    </div>
    
    </>
  )
};

export default CaseStudyDetails2;
