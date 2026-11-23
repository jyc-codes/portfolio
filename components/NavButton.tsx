import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavButtonProps = {
  href: string
  setToggleNav: (value: boolean) => void
  title: string
}

export default function NavButton({ href, setToggleNav, title }: NavButtonProps) {
  const pathname = usePathname()
  return (
    <button
      className={`nav-button ${pathname === href ? "nav-current" : ""}`}
      onClick={e => {
        e.preventDefault()
        setToggleNav(false)
      }}
    >
      <Link href={href}>{title}</Link>
    </button>
  )
}
