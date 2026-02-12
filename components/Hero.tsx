'use client'

import { useEffect, useRef, useState } from 'react'
import { heroEntrance } from '@/utils/animations'

// ✏️ Edit the rotating subtitles below
const TYPED_STRINGS = [
  'Full-Stack Architect.',
  'Data Science and AI @ IIT Guwahati.',
  'Crafting code with cosmic consciousness.',
  'Bridging code & consciousness.',
]

export default function Hero() {
  const [typed, setTyped]       = useState('')
  const [deleting, setDeleting] = useState(false)
  const [strIdx, setStrIdx]     = useState(0)
  const [charIdx, setCharIdx]   = useState(0)

  // Typewriter
  useEffect(() => {
    const current = TYPED_STRINGS[strIdx]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTyped(current.substring(0, charIdx + 1))
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1900)
          } else {
            setCharIdx((c) => c + 1)
          }
        } else {
          setTyped(current.substring(0, charIdx - 1))
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setStrIdx((s) => (s + 1) % TYPED_STRINGS.length)
            setCharIdx(0)
          } else {
            setCharIdx((c) => c - 1)
          }
        }
      },
      deleting ? 38 : 68
    )
    return () => clearTimeout(timeout)
  }, [typed, deleting, strIdx, charIdx])

  // GSAP entrance
  useEffect(() => {
    heroEntrance()
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '72px clamp(20px, 8vw, 120px) 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Sacred glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
          top: '10%', right: '-10%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)',
          bottom: '20%', left: '-8%',
        }}
      />

      <div style={{ maxWidth: '900px' }}>
        {/* ✏️ Edit eyebrow label */}
        <div
          className="hero-eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-code)',
            fontSize: '0.74rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '32px',
            padding: '8px 20px',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '100px',
            background: 'rgba(245,158,11,0.06)',
          }}
        >
          <span
            style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--gold)',
              animation: 'blink 1.8s ease-in-out infinite',
              display: 'inline-block',
            }}
          />
          {/* ✏️ Edit this badge text */}
          Open to Opportunities
        </div>

        {/* ✏️ Edit your heading lines */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 8vw, 7.5rem)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '0.03em',
            marginBottom: '24px',
          }}
        >
          <span
            className="hero-line-1"
            style={{ display: 'block', color: 'var(--text-primary)' }}
          >
            Ankur
          </span>
          <span
            className="hero-line-2 gradient-text"
            style={{ display: 'block' }}
          >
            Singh
          </span>
        </h1>

        {/* Typing subtitle */}
        <p
          className="hero-sub"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            marginBottom: '48px',
            minHeight: '1.8em',
          }}
        >
          {typed}
          <span
            style={{
              display: 'inline-block',
              width: '2px', height: '1em',
              background: 'var(--gold)',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'blink 0.9s step-end infinite',
            }}
          />
        </p>

        {/* ✏️ Edit CTA button links */}
        <div
          className="hero-cta"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-sacred hover-target">
            ✦ View My Work
          </a>
          <a href="#contact" className="btn-ghost hover-target">
            Connect With Me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll-hint"
        style={{
          position: 'absolute',
          bottom: 'clamp(28px, 5vh, 56px)',
          left: 'clamp(20px, 8vw, 120px)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontFamily: 'var(--font-code)',
          fontSize: '0.66rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        <span
          style={{
            width: '48px', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold))',
          }}
        />
        Scroll to explore
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </section>
  )
}
