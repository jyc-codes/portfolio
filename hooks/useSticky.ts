import { useCallback, useEffect, useRef, useState } from "react"

export default function Sticky() {
  const [isSticky, setSticky] = useState(false)
  const [previousScrollPosition, setScrollPosition] = useState(0)

  const element = useRef<HTMLDivElement>(null)

  const memoizedHandleScroll = useCallback(() => {
    let currentScrolledPosition = window.scrollY
    let scrollingDown
    if (currentScrolledPosition >= previousScrollPosition) {
      scrollingDown = true
    } else {
      scrollingDown = false
    }
    setScrollPosition(currentScrolledPosition)
    if (element && element.current && element.current.getBoundingClientRect()) {
      setSticky(
        currentScrolledPosition >
          element.current.getBoundingClientRect().bottom && !scrollingDown
      )
    }
  }, [previousScrollPosition])

  const debounce = useCallback(<T extends (...args: any[]) => void>(func: T, wait = 500, immediate = true) => {
    let timeOut: ReturnType<typeof setTimeout> | null = null
    return (...args: Parameters<T>) => {
      const later = () => {
        timeOut = null
        if (!immediate) func(...args)
      }
      const callNow = immediate && !timeOut
      if (timeOut) clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func(...args)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", debounce(memoizedHandleScroll))
    return () => {
      window.removeEventListener("scroll", () => memoizedHandleScroll)
    }
  }, [debounce, memoizedHandleScroll])

  return { isSticky, element }
}
