'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import { cubic } from '../utils/gsapUtils'
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect'

export default function BlockTitle({ title }) {

  const blockRef = useRef()
  const tlRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    
    const splits = []
    const gsapCtx = gsap.context(() => {
      const titleSplit = new SplitText('.gsap_title', { type: 'chars', charsClass: 's_child' })
      // add all splits to array for clean up
      splits.push(titleSplit)

      gsap.set(titleSplit.chars, { yPercent: 100 })

      gsap.to(titleSplit.chars, {
        duration: .65,
        yPercent: 0,
        stagger: .02,
        ease: cubic,
        scrollTrigger: {
          trigger: blockRef.current,
          start: 'top 50%',
          end: 'bottom top',
          markers: true
        },
      })
      // tlRef.current = gsap.timeline({
      //   defaults: {
      //     duration: .65,
      //     ease: cubic
      //   },
      //   scrollTrigger: {
      //     trigger: blockRef.current,
      //     start: 'top top',
      //     end: 'bottom top',
      //     markers: true
      //   },
      // })
      //   .to(titleSplit.chars, { yPercent: 0, stagger: .02 })
      
    }, blockRef)

    return () => {
      splits.forEach((split) => split.revert())
      gsapCtx.revert()
    }
      
  }, [])

  return (
    <div ref={blockRef} className="flex">
      <h1 className="gsap_title text-15xl text-dark uppercase overflow-hidden">
        {title}
      </h1>
    </div>
  )
}
