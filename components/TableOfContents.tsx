"use client"

import React from "react"
import Link from "next/link"

type Heading = {
  text: string
  value: string
  level: number
}

type TableOfContentsProps = {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <div className="table-of-contents">
      <ul>
        {headings.map((heading: Heading) => {
          return (
            <li
              key={heading.value}
              className={`table-of-contents-heading-${heading.level}`}
            >
              <Link href={"#" + heading.value}>{heading.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
