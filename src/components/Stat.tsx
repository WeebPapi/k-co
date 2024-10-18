import React from "react"
import { StatObject } from "../interfaces/stat.interfaces"
import { Box, Typography } from "@mui/material"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import { useIsMobile } from "../utils/hooks/useDevice"

const Stat: React.FC<StatObject> = ({ number, stat }) => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: 50,
        marginBottom: isMobile ? "2rem" : 0,
      }}
    >
      <TaskAltIcon sx={{ fontSize: 40, color: "#d3b15f" }} />
      <Typography
        variant="body2"
        sx={{ marginLeft: "1rem", fontSize: 18, fontWeight: 500 }}
      >{`${number} ${stat}`}</Typography>
    </Box>
  )
}

export default Stat
