import React from "react"
import { Box } from "@mui/material"
import { useIsMobile } from "../../utils/hooks/useDevice"
import { CardObject } from "../../interfaces/card.interfaces"
import Card from "../Card"

interface CardsProps {
  cards: CardObject[]
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          body={card.body}
        />
      ))}
    </Box>
  )
}

export default Cards
