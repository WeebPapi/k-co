import React, { CSSProperties } from "react"
import { Box } from "@mui/material"
import { useIsMobile } from "../utils/hooks/useDevice"

interface TextBoxProps {
  children: React.ReactNode
  style?: CSSProperties
}

const TextBox: React.FC<TextBoxProps> = ({ children, style }) => {
  const isMobile = useIsMobile()
  return (
    <Box
      width={isMobile ? "100%" : "35%"}
      sx={{
        padding: "30px 0",
        textAlign: "left",
        ...style,
      }}
    >
      {children}
    </Box>
  )
}

export default TextBox
