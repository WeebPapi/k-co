import React from "react"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import { Typography } from "@mui/material"
import { useIsMobile } from "../utils/hooks/useDevice"

interface HeadingProps {
  text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const isMobile = useIsMobile()
  return (
    <Typography
      variant="h2"
      sx={{
        width: "max-content",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#d3b15f",
        fontSize: isMobile ? 30 : 45,
        fontWeight: 400,
      }}
    >
      <AutoStoriesIcon sx={{ marginRight: 1, fontSize: isMobile ? 25 : 35 }} />
      {text}
    </Typography>
  )
}

export default Heading
