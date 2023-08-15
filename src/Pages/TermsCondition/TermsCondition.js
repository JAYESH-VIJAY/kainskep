import React from "react";
import Navbar from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import heroimg from "../../assets/images/privacypolicies.webp";
import { Container } from "react-bootstrap";

const data = [
  {
    head: "Rights reserved by Kainskep",
    body: `This website contains material, like text, graphics, images, data, reports, links, logo, information attained that exclusively belongs to Kainskep. Any user or any other company is not supposed to unlawfully copy it, as they are the registered trademarks of Kainskep. `,
  },
  {
    head: "Services, Subscriptions, and features that are provided by Kainskep ",
    body: `Users can use the services that are allowed publicly or if you have purchased it from us, or you have subscribed for a fee. You are only entitled to that information that is legally provided as per the services purchased or subscribed to.
          
          You can use the website and services offered by us. Provided that you are required to comply with all terms and conditions. If you have any separate agreement between you and Kainskep, it will be subject to the restrictions mentioned within. We have the right to provide you with access to the information that you have purchased or subscribed to. We are not obliged to provide you with extra charges like internet service or apparatus required. 
          
          The payment by the user needs to be done according to the billing terms and charges agreed, at the time of subscription or purchase of the service. The tax or any such cost that occurs from the use of the service needs to be paid by you.  
          
          No user is allowed to use the information from the website or services for promotional use. Users are not supposed to give way the right to use the logo, website content, or any printed materials, to disclose that you or your firm are a shopper of Kainskep.
          `,
  },
  {
    head: "Credential provided to you from Kainskep ",
    body: `We provide you with a username and password or login credentials. You are required to be responsible for it that any activity that happens under that username and password, you will be accountable for it. If you find that the account is being used by any other person unlawfully you are required to inform us promptly, so further action can be taken by us. We are not accountable for loss and damage that may be caused if you fail to inform us on time. It’s the responsibility of the user to keep the information of username and password safe.`,
  },
  {
    head: "Time-Span of paid service or subscriptions",
    body: `The time span for the service or subscription shall continue for the period of time for which you have subscribed to the services till the completion date or if extended, till extended time-span. If you choose to subscribe to our Services on an ongoing basis, these terms and conditions will be renewed automatically for a time span you acquired them for. `,
  },
  {
    head: "Disassociation ",
    body: `The website, services, and content are for informational purposes only. We do not provide any warranties regarding the correctness or comprehensiveness of content. Countries can be anytime added or removed without informing. Data can be stopped or restarted anytime depending. We are not accountable for any injury or damages, whether caused by the negligence of Kainskep or any of its employees, in connection with the services provided to you as per this agreement. Also, we are not accountable for any lost profits, losses, disciplinary, related, or significant damages or any claim by any other party.`,
  },
  {
    head: "Reimbursement Policy ",
    body: `Our reimbursement will depend on the basis of an agreement between us and you(user). 
          To claim your reimbursement, you must raise a ticket from the website. The concerned person will connect with you.
          `,
  },
  {
    head: "Use of information",
    body: `No information, content, or pages be shared electronically or mechanically, which includes photocopying and recording. Copyright, trademark, and other proprietary notices shall not be removed from any pages of the website or used for your own benefits.
          
          You will be held accountable for building a product or service using similar ideas, features, functions, or graphics, or copy any ideas, features, functions, or graphics.
          
          The content is protected by copyright underneath, India and overseas. If you fail to abide by any of these Terms and Conditions, your permission to use the Content or the website can be revoked automatically. You are also required to destroy any copies You have made of any portion of the Content or the website.
          `,
  },
];

function TermsCondition() {
  return (
    <>
    <header className="abx-sticky-header" >
      <Navbar />
    </header>
    <div className="hero-image">
    <Hero
        heroimg={heroimg}
        maintx={"Terms & Conditions"}
        subtx={[
          "We believe in Delivering Quality",
          <br></br>,
          "#YourDigitalTransformationPartner",
        ]}
      />
    </div>
  
      <div className="main_pp main">
        <Container>
          {data.map((e, index) => {
            return (
              <div className="tc-data" key={index}>
                <Details head={e.head} body={e.body} />
              </div>
            );
          })}
        </Container>
      </div>
      <Footer />
    </>
  );
}
const Details = (props) => {
  return (
    <>
      <i>
        <b style={{ whiteSpace: "pre-line" }}>{props.head}</b>
      </i>
      <p style={{ whiteSpace: "pre-line" }}>{props.body}</p>
    </>
  );
};

export default TermsCondition;
