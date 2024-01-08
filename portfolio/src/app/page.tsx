"use client";
import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}
