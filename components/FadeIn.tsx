"use client"

import React from "react"
import { useSpring, animated } from "@react-spring/web"

type FadeInProps = {
  children: React.ReactNode
}

export default function FadeIn({ children }: FadeInProps) {
  const props = useSpring({
    from: { height: "100%", opacity: 0, zIndex: -999 },
    to: { height: "100%", opacity: 1, zIndex: -999 },
    delay: 10,
  })

  return <animated.div style={props}>{children}</animated.div>
}
