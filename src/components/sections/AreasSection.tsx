import React from "react"
import FullWidthContainer from "../FullWidthContainer"
import { Typography } from "@mui/material"
import Cards from "./Cards"
import { cards } from "../../data"

const AreasSection: React.FC = () => {
  return (
    <FullWidthContainer
      style={{
        flexDirection: "column",
        height: "max-content",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: 50, margin: "4rem 0" }}>
        Areas of Expertise
      </Typography>
      <Cards cards={cards} />
    </FullWidthContainer>
  )
}

export default AreasSection
