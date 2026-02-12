'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const inner = document.getElementById('cursor-inner')
    const outer = document.getElementById('cursor-outer')
    if (!inner || !outer) return

    let ox = 0, oy = 0

    const onMove = (e: MouseEvent) => {
      inner.style.left = e.clientX + 'px'
      inner.style.top  = e.clientY + 'px'
      // Smooth lag on outer ring
      ox += (e.clientX - ox) * 0.14
      oy += (e.clientY - oy) * 0.14
      outer.style.left = ox + 'px'
      outer.style.top  = oy + 'px'
    }

    // Smooth loop
    let frame: number
    const loop = () => {
      frame = requestAnimationFrame(loop)
    }
    loop()

    document.addEventListener('mousemove', onMove)

    // Hover effect on interactive elements
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
    }
    const targets = document.querySelectorAll('a, button, .hover-target')
    targets.forEach(addHover)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div id="cursor-inner" />
      <div id="cursor-outer" />
    </>
  )
}
