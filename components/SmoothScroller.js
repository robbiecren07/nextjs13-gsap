'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect'
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import { SmootherContext } from '../utils/SmootherContext'
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother'

export default function SmoothScroller({ children, cursor }) {

  const [smoother, setSmoother] = useState()

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const gsapCtx = gsap.context(() => {

      const instance = ScrollSmoother.create({
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
      })
      setSmoother(instance)

    })

    return () => {
      gsapCtx.revert()
    }
  }, [])

  return (
    <SmootherContext.Provider value={smoother}>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="will-change-transform">
          {children}
        </div>
      </div>
    </SmootherContext.Provider>
  )
}
