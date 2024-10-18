import React from "react"
import { motion } from "framer-motion"

interface CustomIconProps {
  isHovered: boolean
  icon: React.ReactNode
}

const CustomIcon: React.FC<CustomIconProps> = ({ isHovered, icon }) => {
  return (
    <motion.span
      style={{
        height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={isHovered ? "hovered" : "unhovered"}
      transition={{ duration: 0.3 }}
      variants={{
        unhovered: { rotate: 0, marginLeft: 0 },
        hovered: { rotate: "90deg", marginLeft: 20 },
      }}
    >
      {icon}
    </motion.span>
  )
}

export default CustomIcon
