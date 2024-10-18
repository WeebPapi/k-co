import React from "react"
import StandardContainer from "../StandardContainer"
import AboutUs from "../content/AboutUs"
import Stats from "./Stats"
import OurMission from "../content/OurMission"

const AboutSection: React.FC = () => {
  return (
    <>
      <StandardContainer>
        <AboutUs />
      </StandardContainer>
      <Stats />
      <StandardContainer>
        <OurMission />
      </StandardContainer>
    </>
  )
}

export default AboutSection
