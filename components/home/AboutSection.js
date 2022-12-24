'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap-trial'
import { SplitText } from 'gsap-trial/dist/SplitText'
import { ScrollTrigger } from 'gsap-trial/dist/ScrollTrigger'
import aboutImgOne from '../../public/outside-mobile.jpg'
import aboutImgTwo from '../../public/surtide-mobile.jpg'
import aboutImgThree from '../../public/sereen-mobile.jpg'

export default function AboutSection() {
  const aboutRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    
    const splits = []
    const gsapCtx = gsap.context(() => {

      const images = gsap.utils.toArray('.about_l__i')
            
      images.forEach((image, i) => {
        let val
        if (i === 1) {
          val = 2.5
        }
        if (i === 2) {
          val = 5
        }
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            end: 'bottom 20%',
            scrub: true
          },
          duration: 2.6,
          yPercent: i === 0 ? 3 : (1 * val),
          rotate: i === 0 ? -2 : (2 * val),
          ease: 'none'
        })
      })
      
    }, aboutRef)

    return () => {
      splits.forEach((split) => split.revert())
      gsapCtx.revert()
    }
      
  }, [])

  return (
    <section ref={aboutRef} className="w-full h-full flex flex-row justify-between items-center pt-[14vh] pb-[8vh] px">
      <div className="about_l w-full">
        <div className="about_l__i i_one w-[440px] rounded-3xl shadow-custom -rotate-[16deg] origin-bottom overflow-hidden z-[1]">
          <Image
            src={aboutImgOne}
            alt="test"
            quality={90}
            priority
          />
        </div>
        <div className="about_l__i i_two absolute top-[10%] left-[15%] w-[440px] rounded-3xl -rotate-[10deg] shadow-custom origin-bottom overflow-hidden z-[2]">
          <Image
            src={aboutImgTwo}
            alt="test"
            quality={90}
            priority
          />
        </div>
        <div className="about_l__i i_three absolute top-[18%] left-[30%] w-[440px] rounded-3xl -rotate-[5deg] shadow-custom origin-bottom overflow-hidden z-[3]">
          <Image
            src={aboutImgThree}
            alt="test"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  )
}