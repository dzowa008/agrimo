// src/pages/HomePage.jsx
import React from "react";
import Hero from "../component/clarahero.jsx";
// import TeamSectionDivs from '../component/TeamSection.jsx'
import Footer from '../component/Footer.jsx'
import ResumeClara from '../component/claramai.jsx'
import Massege from '../component/massege.jsx'

const ClaraPage = () => {
  return (
    <div>
      <Hero />
      < ResumeClara/>
      <Massege/>
      <Footer /> 
    </div>
  );
};

export default ClaraPage;
