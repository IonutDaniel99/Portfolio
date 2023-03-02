import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

function LoadingBarScroll() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
      let value = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      if (value >= 99) {
        setProgress(99.9)
      } else {
        setProgress(value)
      }
    })
  }, [])
  return <LoadingBar color='#f11946' progress={progress} height={3} />
}

export default LoadingBarScroll
