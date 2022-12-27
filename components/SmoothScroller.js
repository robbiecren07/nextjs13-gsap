'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect'
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother'

export default function SmoothScroller({ children, cursor }) {

  const smoother = useRef()
  const ctx = useRef()
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ctx.current = gsap.context(() => {

      smoother.current = ScrollSmoother.create({
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
      })

    })

    return () => {
      ctx.current.revert()
    }
  }, [pathname])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
