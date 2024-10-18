import React from "react"
import { useIsMobile } from "../../utils/hooks/useDevice"

const API_KEY = import.meta.env.VITE_API_KEY

const MapSnippet: React.FC = () => {
  const isMobile = useIsMobile()
  return (
    <iframe
      id="location"
      width={isMobile ? 300 : 450}
      height={isMobile ? 200 : 350}
      style={{ borderRadius: 15 }}
      loading="lazy"
      referrerPolicy={"no-referrer-when-downgrade"}
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
    &q=Basmotors`}
    ></iframe>
  )
}

export default MapSnippet
