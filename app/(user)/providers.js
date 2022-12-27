'use client'

import SmoothScroller from '../../components/SmoothScroller'

export default function Providers({ children }) {

  return (
    <SmoothScroller>
      {children}
    </SmoothScroller>
  )
}
