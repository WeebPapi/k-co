import React from "react"
import { Box } from "@mui/material"
import Stat from "../Stat"
import { stats } from "../../data"
import { useIsMobile } from "../../utils/hooks/useDevice"

const Stats: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        marginTop: "3rem",
        maxWidth: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {stats.map((stat) => (
        <Stat key={stat.number} number={stat.number} stat={stat.stat} />
      ))}
    </Box>
  )
}

export default Stats
