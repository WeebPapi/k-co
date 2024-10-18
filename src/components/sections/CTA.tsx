import React from "react"
import FullWidthContainer from "../FullWidthContainer"
import image from "../../assets/books.jpeg"
import { Typography } from "@mui/material"
import CTAButtons from "../content/CTAButtons"

const CTA: React.FC = () => {
  return (
    <FullWidthContainer
      image={image}
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: "6rem",
        height: 520,
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "white", fontWeight: 400, margin: "6rem 0 8rem 0" }}
      >
        Get in Touch
      </Typography>
      <CTAButtons />
    </FullWidthContainer>
  )
}

export default CTA
