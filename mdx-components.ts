// This file is required to use @next/mdx in the `app` directory.
import type React from "react"

export function useMDXComponents(components: Record<string, React.ElementType>) {
    return components
    // Allows customizing built-in components, e.g. to add styling.
    // return {
    //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    //   ...components,
    // }
  }