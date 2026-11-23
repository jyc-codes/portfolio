import React from "react"
import { MDXProvider } from "@mdx-js/react"
import LightboxImage from "./LightboxImages"

const shortcodes = { LightboxImage }

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}
