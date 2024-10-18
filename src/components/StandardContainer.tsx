import { Container } from "@mui/material"
import React from "react"
import { useIsMobile } from "../utils/hooks/useDevice"

interface StandardContainerProps {
  children: React.ReactNode
}

const StandardContainer: React.FC<StandardContainerProps> = ({ children }) => {
  const isMobile = useIsMobile()
  return (
    <Container
      sx={{
        marginTop: 6,
        borderRadius: 13,
        height: isMobile ? "max-content" : 500,
        backgroundColor: "white",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "start",
        alignItems: isMobile ? "flex-start" : "center",
        position: "relative",
      }}
    >
      {children}
    </Container>
  )
}

export default StandardContainer
