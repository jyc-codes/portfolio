import React, { useEffect } from "react"
import useSticky from "../hooks/useSticky"
import { useSpring, animated } from "@react-spring/web"

type StickyHeaderProps = {
  children: React.ReactNode
}

export default function StickyHeader({ children }: StickyHeaderProps) {
  const { isSticky, element } = useSticky()
  const [{ y }, api] = useSpring(() => ({ y: 0, color: "#fff" }))

  useEffect(() => {
    if (isSticky) api.set({ y: 100, color: "#000" })
    else api.set({ y: 0, color: "#fff" })
  }, [isSticky])
  return (
    <animated.div
      style={{ transform: y.to(v => `translateY(${v}%`) }}
      ref={element}
      // className={isSticky ? `sticky-header` : `header`}
    >
      {children}
    </animated.div>
  )
}
