'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { revealLeft, revealRight, revealFade, countUp } from '@/utils/animations'

// ✏️ Edit your About stats here
const STATS = [
  { number: 5, label: 'Projects' },
  { number: 3,  label: 'Clients' },
]

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    revealFade(sectionRef.current.querySelector('.section-tag')!)
    revealLeft(sectionRef.current.querySelector('.section-title')!)
    revealLeft(sectionRef.current.querySelector('.about-visual')!)
    revealRight(sectionRef.current.querySelector('.about-content')!)

    // Counter animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-num').forEach((el) => {
            const target = parseInt((el as HTMLElement).dataset.target ?? '0')
            countUp(el as HTMLElement, target)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-wrap"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(245,158,11,0.05) 0%, transparent 70%)',
      }}
    >
      {/* Sacred glow */}
      <div
        className="glow-orb"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          top: '-100px', left: '-80px',
        }}
      />

      <div className="section-tag">About Me</div>
      <h2 className="section-title">
        The{' '}
        <span className="gradient-text">Soul</span>{' '}
        Behind the Code
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: 'clamp(40px, 8vw, 100px)',
          alignItems: 'center',
          marginTop: '64px',
        }}
        className="about-layout"
      >
        {/* ── Visual side ─────────────────────── */}
        <div className="about-visual" style={{ position: 'relative' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-dim)',
              background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(192,132,252,0.04))',
              position: 'relative',
            }}
          >
            {/* {// ✏️ REPLACE with your actual photo:
                <Image src="/profile.jpg" alt="Ankur Singh" fill style={{ objectFit: 'cover' }} />
            } */}
            <div
              style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '12px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-code)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ fontSize: '2.5rem' }}>✦</span>
              <span>Your Photo Here</span>
              <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>
                Replace in About.tsx
              </span>
            </div>

            {/* Gold overlay */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(245,158,11,0.1), transparent 60%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            className="glass"
            style={{
              position: 'absolute',
              bottom: '-20px', right: '-20px',
              borderRadius: '16px',
              padding: '18px 22px',
              display: 'flex', alignItems: 'center', gap: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            <div
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--gold), var(--lotus))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}
            >
              🧘
            </div>
            <div>
              {/* ✏️ Edit badge content */}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                IIT Guwahati
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                Data Science & AI
              </div>
            </div>
          </div>
        </div>

        {/* ── Content side ────────────────────── */}
        <div className="about-content">
          {/* ✏️ Edit your bio paragraphs here */}
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '18px' }}>
            I am a <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              passionate undergraduate at IIT Guwahati
            </strong>, pursuing Data Science and Artificial Intelligence — where mathematics meets
            intuition, and logic dances with creativity.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '18px' }}>
            My foundation spans <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              C++, Java,Go , JavaScript , Typescript, Algorithms
            </strong>, and Data Structures — layered with hands-on experience in full-stack
            development, and generative AI integration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '32px' }}>
            Like the universe unfolding its own design, I believe every problem contains its
            solution within. As an <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              AI enthusiast, a full-stack developer
            </strong> and Personal agent builder, I seek to illuminate what's possible at the intersection
            of technology and human potential.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass hover-target"
                style={{
                  borderRadius: '16px',
                  padding: '22px 16px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.transform = ''
                  ;(e.currentTarget as HTMLElement).style.borderColor = ''
                }}
              >
                <span
                  className="stat-num gradient-text"
                  data-target={s.number}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  0+
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-code)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginTop: '4px',
                    display: 'block',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-layout { grid-template-columns: 1fr !important; }
          .about-visual { max-width: 380px; }
        }
      `}</style>
    </section>
  )
}
