import Hero from "@/components/sections/Hero";
import OwnersSection from "@/components/sections/OwnerSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/Stats";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <ServicesSection /> 
      <ProjectsSection /> 
      <StatsSection /> 
      <OwnersSection /> 
      <footer className="py-10"></footer>
    </>
  );
};

export default page;
