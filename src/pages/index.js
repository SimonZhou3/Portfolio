import React from "react";
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";

import ExperienceSection from "../gatsby-theme-portfolio-minimal/sections/Experience/index";


export default function IndexPage() {
    return (
        <>
            <Seo title="SZhou"/>
            <Page>
                <HeroSection sectionId="hero"/>
                <AboutSection sectionId="about" heading="About Me"/>
                <InterestsSection sectionId="skills" heading="Skills"/>
                <ExperienceSection sectionId="experience" heading="Work Experience"/>
                <ContactSection sectionId="Contact" heading="Contact"/>
            </Page>
        </>
    );
}
