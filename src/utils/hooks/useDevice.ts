import { useState, useEffect, useCallback } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : undefined,
    height: typeof window !== "undefined" ? window.innerHeight : undefined,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return windowSize
}

const getDevice = (width: number) => {
  if (width && width <= 768) {
    return "MOBILE"
  }
  return "DESKTOP"
}

export const useIsMobile = () => {
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? getDevice(window.innerWidth) === "MOBILE"
      : false
  )

  useEffect(() => {
    setIsMobile(getDevice(width as number) === "MOBILE")
  }, [width])

  return isMobile
}

export default useWindowSize
