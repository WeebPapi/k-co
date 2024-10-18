import { Typography } from "@mui/material"
import FullWidthContainer from "../FullWidthContainer"
import React from "react"
import background from "../../assets/1200px-20110421_Tbilisi_Georgia_Panoramic_upscaled.jpg"
import { useIsMobile } from "../../utils/hooks/useDevice"
import HeaderButtons from "../content/HeaderButtons"

const Header: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <FullWidthContainer image={background}>
      <Typography
        variant="h1"
        color="white"
        sx={{
          width: isMobile ? 300 : 400,
          fontSize: isMobile ? 60 : 80,
          fontWeight: 400,
        }}
      >
        The <span className="gold-text">Solution</span> to Your Legal Problems
      </Typography>
      <HeaderButtons />
    </FullWidthContainer>
  )
}

export default Header
