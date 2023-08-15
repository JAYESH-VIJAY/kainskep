import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "./Pages/About/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Career from "./Pages/Career/Career";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import Services from "./Pages/Service/Services";
import Cloud from "./Pages/allservices/Cloud/Cloud";
import PrivacyPolicies from "./Pages/PrivacyPolicy/PrivacyPolicies";
import TermsCondition from "./Pages/TermsCondition/TermsCondition";
import GoToTop from "./components/GoToTop/GoToTop";
import SubmitResume from "./Pages/Career/SubmitResume/SubmitResume";
import BlogDetails from "./Pages/Blog/BlogDetails/BlogDetails";
import CaseStudyDetails from "./Pages/CaseStudy/CaseStudyDetail/CaseStudyDetails";
// import CaseStudyDetails from "./Pages/CaseStudy/CaseStudyDetail/CaseStudyDetails";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact us/Contact";
import AppModerization from "./Pages/allservices/AppModerization/AppModerization";
import DevOps from "./Pages/allservices/Devops/Devops";
import ApplicationDevelop from "./Pages/allservices/ApplicationDevelop/ApplicationDevelop";
import DataAnalytics from "./Pages/allservices/DataAnalytics/DataAnalytics";
import CaseStudyDetails2 from "./Pages/CaseStudy/CaseStudyDetail/CaseStudyDetails2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route exact path="/casestudy" element={<CaseStudy />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicies />} />
          <Route exact path="/terms-condition" element={<TermsCondition />} />
          <Route exact path="/career/" element={<Career />} />
          <Route
            exact
            path="/career/executive_resume_submit"
            element={<SubmitResume />}
          />
          <Route exact path="/services/" element={<Services />} />
          <Route
            exact
            path="/services/data-analytics"
            element={<DataAnalytics />}
          />
          <Route
            exact
            path="/services/app-modernization-cloud-native"
            element={<AppModerization />}
          />
          <Route
            exact
            path="/services/cloud-transformation"
            element={<Cloud />}
          />
          <Route
            exact
            path="/services/devops-and-automation"
            element={<DevOps />}
          />
          <Route
            exact
            path="/services/application-development-and-management"
            element={<ApplicationDevelop />}
          />
          <Route
            exact
            path="/casestudydetails2"
            element={<CaseStudyDetails2 />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <GoToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
