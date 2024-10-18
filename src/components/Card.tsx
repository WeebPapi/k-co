import React from "react"
import { CardObject } from "../interfaces/card.interfaces"
import { Box, Typography } from "@mui/material"
import { useIsMobile } from "../utils/hooks/useDevice"

const Card: React.FC<CardObject> = ({ icon, title, body }) => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: 320,
        height: 400,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        marginBottom: isMobile ? "3rem" : 0,
      }}
    >
      <span
        style={{
          padding: "1rem",
          backgroundColor: "#be8c3c",
          width: "max-content",
          borderRadius: 60,
          height: 56,
          color: "white",
        }}
      >
        {icon}
      </span>
      <Typography variant="h3" sx={{ fontSize: 28, margin: "1.5rem 0 1rem 0" }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: 16,
          lineHeight: isMobile ? "22px" : "30px",
          color: "#686D76",
        }}
      >
        {body}
      </Typography>
    </Box>
  )
}

export default Card
