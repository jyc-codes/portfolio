import React from "react"
import CustomLightbox from "@/components/CustomLightbox"
import type { StaticImageData } from "next/image"

type LightboxImagesProps = {
  images: StaticImageData[]
}

export default function LightboxImages({ images }: LightboxImagesProps) {
  return (
    <>
      <CustomLightbox slides={images} />
    </>
  )
}
