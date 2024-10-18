import React from "react"
import { Box, Button } from "@mui/material"
import CustomIcon from "../CustomIcon"
import { VpnKeyOff, KeyboardDoubleArrowRight } from "@mui/icons-material"

const HeaderButtons: React.FC = () => {
  const [consultButtonHover, setConsultButtonHover] = React.useState(false)
  const [learnButtonHover, setLearnButtonHover] = React.useState(false)
  return (
    <Box
      sx={{
        width: 260,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button
        onMouseOver={() => {
          setConsultButtonHover(true)
        }}
        onMouseOut={() => {
          setConsultButtonHover(false)
        }}
        variant="contained"
        color="secondary"
        size="large"
        endIcon={
          <CustomIcon isHovered={consultButtonHover} icon={<VpnKeyOff />} />
        }
        sx={{ marginBottom: 2 }}
      >
        Get Consultation
      </Button>
      <a href="#about" style={{ width: "100%" }}>
        <Button
          onMouseOver={() => {
            setLearnButtonHover(true)
          }}
          onMouseOut={() => {
            setLearnButtonHover(false)
          }}
          variant="contained"
          sx={{ backgroundColor: "secondary.light", width: "100%" }}
          size="large"
          endIcon={
            <CustomIcon
              isHovered={learnButtonHover}
              icon={<KeyboardDoubleArrowRight />}
            />
          }
        >
          Learn More
        </Button>
      </a>
    </Box>
  )
}

export default HeaderButtons
