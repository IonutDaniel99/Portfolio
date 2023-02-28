import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

function LoadingBarScroll() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      var limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
      const scalar = Math.round((scrollPosition / limit) * 100)
      if (scalar > 91) {
        setProgress(0.1)
      } else {
        setProgress(scalar)
      }
    })
  }, [])
  return <LoadingBar color='#f11946' progress={progress} />
}

export default LoadingBarScroll
