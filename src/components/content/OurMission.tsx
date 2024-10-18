import React from "react"
import TextBox from "../TextBox"
import Heading from "../Heading"
import { Typography } from "@mui/material"
import { useIsMobile } from "../../utils/hooks/useDevice"
import ZoomablePic from "../ZoomablePic"
import image from "../../assets/pngtree-3d-rendered-concept-illustration-of-legal-justice-and-rules-image_3882668.jpg"

const OurMission: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <TextBox style={{ margin: isMobile ? "0 0 300px 0" : "0" }}>
        <Heading text="Our Mission" />
        <Typography
          sx={{
            marginTop: 2,
            fontSize: isMobile ? 16 : 20,
            lineHeight: isMobile ? "22px" : "30px",
            color: "#686D76",
          }}
          variant="body1"
        >
          Our mission is simple: to advocate for justice while offering
          practical and tailored legal counsel to individuals, businesses, and
          families. Whether you're navigating a complex corporate dispute,
          facing family law challenges, or seeking guidance on real estate
          transactions, we are here to guide you every step of the way.
        </Typography>
      </TextBox>
      <ZoomablePic
        image={image}
        style={{ left: isMobile ? 0 : "58%", top: isMobile ? "50%" : "auto" }}
      />
    </>
  )
}

export default OurMission
