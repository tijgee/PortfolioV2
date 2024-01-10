"use client";

import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Timothy Gee</title>
      </Head>
      <HeaderSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
