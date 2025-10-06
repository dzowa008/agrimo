// src/pages/HomePage.jsx
import React from "react";
import Hero from "../component/OurteammemberHero.jsx";
import TeamSectionDivs from '../component/TeamSection.jsx'
import Footer from '../component/Footer.jsx'

const OurTeamPage = () => {
  return (
    <div>
      <Hero />
      <TeamSectionDivs />
      <Footer />
    </div>
  );
};

export default OurTeamPage;
