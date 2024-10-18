import { StatObject } from "./interfaces/stat.interfaces"
import { CardObject } from "./interfaces/card.interfaces"
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork"
import BusinessIcon from "@mui/icons-material/Business"
import GavelIcon from "@mui/icons-material/Gavel"
import { createElement } from "react"

export const stats: StatObject[] = [
  {
    number: "200+",
    stat: "Cases Won",
  },
  { number: "100+", stat: "Clients Represented" },
  { number: "20+", stat: "Companies Partnered" },
]

export const cards: CardObject[] = [
  {
    icon: createElement(MapsHomeWorkIcon),
    title: "Real Estate Law",
    body: "We handle all real estate transactions and disputes with precision, ensuring your interests are protected. From contracts to litigation, we're here to guide you through every step.",
  },
  {
    icon: createElement(BusinessIcon),
    title: "Corporate Law",
    body: "We provide expert legal counsel for businesses of all sizes, from startups to established corporations. Whether it's contract negotiations, compliance, or mergers, we help you navigate every aspect with confidence.",
  },
  {
    icon: createElement(GavelIcon),
    title: "Disputes",
    body: "We handle all types of disputes—business, personal, or contractual—with a focus on quick, effective resolutions. Whether through negotiation or litigation, we’ll protect your interests every step of the way.",
  },
]
