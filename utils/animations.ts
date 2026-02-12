// ================================================
// ANIMATION UTILITIES
// Stable GSAP + ScrollTrigger setup for Next.js
// ================================================

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* =================================================
   REVEAL UP
================================================= */
export function revealUp(
  target: string | Element | Element[],
  options?: { delay?: number; duration?: number; y?: number }
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: options?.y ?? 50 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.9,
      delay: options?.delay ?? 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}

/* =================================================
   FADE
================================================= */
export function revealFade(
  target: string | Element | Element[],
  delay = 0
) {
  return gsap.fromTo(
    target,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}

/* =================================================
   SLIDE LEFT
================================================= */
export function revealLeft(
  target: string | Element | Element[],
  delay = 0
) {
  return gsap.fromTo(
    target,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.85,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}

/* =================================================
   SLIDE RIGHT
================================================= */
export function revealRight(
  target: string | Element | Element[],
  delay = 0
) {
  return gsap.fromTo(
    target,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.85,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}

/* =================================================
   SCALE
================================================= */
export function revealScale(
  target: string | Element | Element[],
  stagger = 0.06
) {
  return gsap.fromTo(
    target,
    { opacity: 0, scale: 0.88 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      stagger,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: target as Element,
        start: 'top bottom',
        toggleActions: 'play none none none',
      },
    }
  )
}

/* =================================================
   HERO ENTRANCE
================================================= */
export function heroEntrance() {
  return gsap
    .timeline({ delay: 0.15 })
    .fromTo(
      'nav',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(
      '.hero-eyebrow',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo(
      '.hero-line-1',
      { opacity: 0, y: 70 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(
      '.hero-line-2',
      { opacity: 0, y: 70 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(
      '.hero-sub',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.35'
    )
    .fromTo(
      '.hero-scroll-hint',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2'
    )
}

/* =================================================
   COUNT UP
================================================= */
export function countUp(
  el: HTMLElement,
  target: number,
  duration = 2000
) {
  let start = 0
  const increment = target / (duration / 35)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      start = target
      clearInterval(timer)
    }
    el.textContent = Math.round(start) + '+'
  }, 35)
}

/* =================================================
   3D TILT
================================================= */
export function addTilt(
  el: HTMLElement,
  options?: { maxTilt?: number; perspective?: string }
) {
  const max = options?.maxTilt ?? 10
  const persp = options?.perspective ?? '800px'

  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5

    el.style.transform = `perspective(${persp}) rotateY(${x * max * 2}deg) rotateX(${-y * max}deg) translateY(-8px)`
  })

  el.addEventListener('mouseleave', () => {
    el.style.transform = ''
  })
}
