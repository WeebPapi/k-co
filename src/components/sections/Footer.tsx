import { Box, Typography } from "@mui/material"
import React from "react"
import FullWidthContainer from "../FullWidthContainer"
import { useIsMobile } from "../../utils/hooks/useDevice"
import MapSnippet from "../content/MapSnippet"
import FacebookIcon from "@mui/icons-material/Facebook"

const Footer: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <FullWidthContainer
      style={{
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "70%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "0 6rem" }}>
          <Typography variant="body1" sx={{ fontSize: 70 }}>
            K&CO
          </Typography>
          <Typography variant="body1" color="#686D76" sx={{ fontWeight: 500 }}>
            Secret Keepers
          </Typography>
        </Box>
        <Box sx={{ padding: isMobile ? "2rem" : "0 6rem" }}>
          <MapSnippet />
          <Typography
            variant="body2"
            color="#686D76"
            sx={{ width: 200, fontWeight: 500 }}
          >
            Basmotors Business Center, Third Floor
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ width: "90%", height: "2px", backgroundColor: "#191A1C" }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "max-content",
          padding: "1rem 6rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          K&CO © 2024, All rights reserved
        </Typography>
        <Box>
          <a href="https://www.facebook.com/lawofficeco" target="_blank">
            <FacebookIcon sx={{ color: "white" }} />
          </a>
        </Box>
      </Box>
    </FullWidthContainer>
  )
}

export default Footer
