import React from "react"
import { Typography } from "@mui/material"
import { useIsMobile } from "../../utils/hooks/useDevice"
import image from "../../assets/1355873691_093.jpg"
import Heading from "../Heading"
import TextBox from "../TextBox"
import ZoomablePic from "../ZoomablePic"

const AboutUs: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <>
      {" "}
      <ZoomablePic image={image} />
      <TextBox style={{ margin: isMobile ? "300px 0 0 0" : "0 0 0 600px" }}>
        <>
          <Heading text="About Us" />
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              fontSize: isMobile ? 16 : 20,
              lineHeight: isMobile ? "22px" : "30px",
              color: "#686D76",
            }}
          >
            At Kapanadze & Company Law Firm, we are dedicated to delivering
            exceptional legal services with a focus on personalized attention
            and client success. With over 20 years of experience, our team of
            expert attorneys has built a reputation for providing strategic
            solutions that address the unique needs of each case.
          </Typography>
        </>
      </TextBox>
    </>
  )
}

export default AboutUs
