import React from "react"
import { Container } from "@mui/material"
import { useIsMobile } from "../utils/hooks/useDevice"

interface FullWidthContainerProps {
  children: React.ReactNode
  image?: string
  style?: React.CSSProperties
}

const FullWidthContainer: React.FC<FullWidthContainerProps> = ({
  children,
  image,
  style,
}) => {
  const isMobile = useIsMobile()
  return (
    <Container
      sx={{
        maxWidth: "100%!important",
        width: "100%",
        background: image ? `url('${image}')` : "inherit",
        height: 680,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: 0,
        padding: "0 !important",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        ...style,
      }}
    >
      {children}
    </Container>
  )
}

export default FullWidthContainer
