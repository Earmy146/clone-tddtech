import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import VideoShowcase from "../components/home/VideoShowcase";
import AssetPhilosophy from "../components/home/AssetPhilosophy";
import ServicesOverview from "../components/home/ServicesOverview";
import TeamAbout from "../components/home/TeamAbout";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TemplateStore from "../components/home/TemplateStore";
import OperationPlans from "../components/home/OperationPlans";
import PricingSection from "../components/home/PricingSection";
import FAQSection from "../components/home/FAQSection";
import AIAdvisorSection from "../components/home/AIAdvisorSection";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  useEffect(() => {
    document.title = "TDDTech | Website là tài sản — xây đúng, vận hành mỗi tháng";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="home-page-container">
      <HeroSection />
      <VideoShowcase />
      <AssetPhilosophy />
      <ServicesOverview />
      <TeamAbout />
      <FeaturedProjects />
      <TemplateStore />
      <OperationPlans />
      <PricingSection />
      <FAQSection />
      <AIAdvisorSection />
      <ContactSection />
    </div>
  );
}
