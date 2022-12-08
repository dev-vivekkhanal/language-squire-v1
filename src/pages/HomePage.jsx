import React from "react";
import CoursesSection from "../components/homePage/CoursesSection";
import DemoBanner from "../components/homePage/DemoBanner";
import FAQ from "../components/homePage/FAQ";
import FeaturesSection from "../components/homePage/FeaturesSection";
import Footer from "../components/homePage/Footer";
import HeroSection from "../components/homePage/HeroSection";
import RegisterBanner from "../components/homePage/RegisterBanner";

const HomePage = () => {
  return (
    <div className="bg-[#ffdf58] ">
      <HeroSection />
      <FeaturesSection />
      <DemoBanner />
      <CoursesSection />'{/* testimonials section */}
      <div className="h-[90vh] bg-[#ffdf58]"></div>
      <FAQ />
      <RegisterBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
