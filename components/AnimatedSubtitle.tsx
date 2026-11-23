"use client"

import React from "react"
import { useSpring, animated } from "@react-spring/web"

type AnimatedSubtitleProps = {
  text?: string
  delay?: number
}

export default function AnimatedSubtitle({
  text,
  delay = 2000,
}: AnimatedSubtitleProps) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  })

  return (
    <animated.p style={props} id="banner-subtitle">
      {text}
    </animated.p>
  )
}
