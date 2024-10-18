import React from "react"
import { Box, Button } from "@mui/material"
import CustomIcon from "../CustomIcon"
import SendIcon from "@mui/icons-material/Send"
import PublicIcon from "@mui/icons-material/Public"

const CTAButtons: React.FC = () => {
  const [consultButtonHover, setConsultButtonHover] = React.useState(false)
  const [learnButtonHover, setLearnButtonHover] = React.useState(false)
  return (
    <Box
      sx={{
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
          <CustomIcon isHovered={consultButtonHover} icon={<SendIcon />} />
        }
        sx={{ width: 350, height: 50, marginBottom: 3 }}
      >
        Contact Us
      </Button>
      <a href="#location" style={{ width: 350, height: 50 }}>
        <Button
          onMouseOver={() => {
            setLearnButtonHover(true)
          }}
          onMouseOut={() => {
            setLearnButtonHover(false)
          }}
          variant="contained"
          sx={{
            backgroundColor: "secondary.light",
            width: "100%",
            height: "100%",
          }}
          size="large"
          endIcon={
            <CustomIcon isHovered={learnButtonHover} icon={<PublicIcon />} />
          }
        >
          Find Us
        </Button>
      </a>
    </Box>
  )
}

export default CTAButtons
