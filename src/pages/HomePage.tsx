import React from "react"
import Header from "../components/sections/Header"
import AboutSection from "../components/sections/AboutSection"
import AreasSection from "../components/sections/AreasSection"
import CTA from "../components/sections/CTA"

const HomePage: React.FC = () => {
  return (
    <>
      <header id="home">
        <Header />
      </header>
      <section id="about">
        <AboutSection />
      </section>
      <section id="areas">
        <AreasSection />
      </section>
      <section id="contact">
        <CTA />
      </section>
    </>
  )
}

export default HomePage
