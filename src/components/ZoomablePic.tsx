import React from "react"
import { useIsMobile } from "../utils/hooks/useDevice"
import { Box } from "@mui/material"

interface ZoomablePicProps {
  image: string
  style?: React.CSSProperties
}

const ZoomablePic: React.FC<ZoomablePicProps> = ({ image, style }) => {
  const [imageZoom, setImageZoom] = React.useState(100)
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "40%",
        height: isMobile ? "50%" : "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: isMobile ? 0 : "2%",
        top: isMobile ? 0 : "5%",
        overflow: "hidden",
        borderRadius: 13,
        ...style,
      }}
    >
      <div
        onMouseOver={() => setImageZoom(150)}
        onMouseLeave={() => setImageZoom(100)}
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          scale: `${imageZoom}%`,
          transition: "scale 0.6s",
          borderRadius: 13,
          backgroundImage: `url("${image}")`,
        }}
      />
    </Box>
  )
}

export default ZoomablePic
