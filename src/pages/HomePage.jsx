import React from "react";
import CoursesSection from "../components/homePage/CoursesSection";
import DemoBanner from "../components/homePage/DemoBanner";
import FeaturesSection from "../components/homePage/FeaturesSection";
import HeroSection from "../components/homePage/HeroSection";

const HomePage = () => {
  return (
    <div className="bg-[#ffdf58] ">
      <HeroSection />
      <FeaturesSection />
      <DemoBanner />
      <CoursesSection />
    </div>
  );
};

export default HomePage;
