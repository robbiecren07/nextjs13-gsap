'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import SplitText from 'gsap-trial/dist/SplitText'
import Link from 'next/link'
import { cubic } from '../utils/gsapUtils'

export default function Header() {
  const headerRef = useRef()
  const tlRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    
    const splits = []
    const gsapCtx = gsap.context(() => {

      const links = gsap.utils.toArray('.nav_bar .block'),
        paths = gsap.utils.toArray('.header_logo path'),
        linksSplit = new SplitText(links, { type: 'chars', charsClass: 's_child' })
      
      tlRef.current = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: cubic,
        },
        paused: true,
      })
        .from([paths, linksSplit.chars], { yPercent: -100, stagger: 0.02 })
        .progress(1)
      
      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? tlRef.current.play() : tlRef.current.reverse()
        }
      })

    }, headerRef)

    return () => {
      splits.forEach((split) => split.revert())
      gsapCtx.revert()
    }
      
  }, [])

  return (
    <header ref={headerRef} className="header fixed top-0 left-0 w-full z-40">
      <div className="w-full flex justify-between items-center px py-4 overflow-hidden">
        <Link
          href="/"
          className="header_logo w-12 py-2 text-dark"
        >
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.3 65.4">
          <path className="letter_r" d="M20.5,2.6c4.7,0,7.6,1.6,7.6,8.8v15.3c0,3.9-1.9,5.8-4.3,6.4c2.7,0.6,4.7,2.7,4.7,8.4v21.4h-8.1V42.8
            c0-5.3-0.8-6.4-4.7-6.4h-3.6v26.5H4V2.6H20.5z M12.1,8.1v21.9h3.6c3.5,0,4.4-1.6,4.4-6V13.8c0-4.7-1-5.7-4.3-5.7H12.1z"/>
          <path className="letter_c" d="M35.6,13.2c0-7.9,3.7-10.6,8.5-10.6h7.5c4.7,0,8.5,2.7,8.5,10.6v10.2h-8v-9.1c0-4.6-1-6.6-4.2-6.6
            c-3.3,0-4.2,2-4.2,6.7V51c0,4.7,0.9,6.7,4.2,6.7c3.2,0,4.2-2,4.2-6.6v-9.7h8v10.8c0,7.9-3.8,10.6-8.5,10.6h-7.5
            c-4.8,0-8.5-2.7-8.5-10.6V13.2z"/>
          </svg>
        </Link>
        <nav role="navigation" className="nav_bar">
          <ul className='flex flex-row items-center gap-9'>
            <li>
              <Link
                href="/"
                className='relative text-lg uppercase text-dark transition-all duration-300 hover:text-ltblue'
              > 
                <span className="block overflow-hidden">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className='relative text-lg uppercase text-dark transition-all duration-300 hover:text-ltblue'
              >
                <span className="block overflow-hidden">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/snippets"
                className='relative text-lg uppercase text-dark transition-all duration-300  hover:text-ltblue'
              >
                <span className="block overflow-hidden">Snippets</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
