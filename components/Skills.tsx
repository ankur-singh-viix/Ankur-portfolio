'use client'

import { useEffect, useRef } from 'react'
import { SKILLS } from '@/data/skills'
import { revealFade, revealUp, addTilt } from '@/utils/animations'

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    revealFade(sectionRef.current.querySelector('.section-tag')!)
    revealUp(sectionRef.current.querySelector('.section-title')!)

    // Staggered card reveal + scroll-triggered skill bars
    const cards = sectionRef.current.querySelectorAll<HTMLElement>('.skill-card')
    cards.forEach((card, i) => {
      addTilt(card, { maxTilt: 12 })

      // Scroll observer for skill bars
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const bar = card.querySelector<HTMLElement>('.skill-bar-fill')
            if (bar) bar.style.width = bar.dataset.level + '%'
            observer.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(card)
    })
  }, [])

  // Group by category
  const categories = ['frontend', 'backend', 'ai', 'tools'] as const
  const labels = {
    frontend: '✦ Frontend',
    backend:  '✦ Backend',
    ai:       '✦ AI & ML',
    tools:    '✦ Tools',
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-wrap"
      style={{
        background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(192,132,252,0.06) 0%, transparent 70%)',
      }}
    >
      <div className="section-tag">Technical Mastery</div>
      <h2 className="section-title">
        Sacred <span className="gradient-text">Skills</span>
      </h2>
      <p
        className="section-title"
        style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: 0 }}
      >
        Tools of transformation — each one a path to something greater.
      </p>

      {categories.map((cat) => {
        const items = SKILLS.filter((s) => s.category === cat)
        return (
          <div key={cat} style={{ marginTop: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--lotus)',
                marginBottom: '20px',
              }}
            >
              {labels[cat]}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
                gap: '14px',
              }}
            >
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card hover-target"
                  style={{
                    padding: '22px 18px',
                    borderRadius: '18px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-dim)',
                    textAlign: 'center',
                    cursor: 'default',
                    transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--border-gold)'
                    el.style.background  = 'var(--bg-card-hover)'
                    el.style.boxShadow   = 'var(--glow-gold)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = ''
                    el.style.background  = ''
                    el.style.boxShadow   = ''
                  }}
                >
                  {/* Sacred shimmer */}
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.06), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      pointerEvents: 'none',
                    }}
                    className="card-shimmer"
                  />

                  <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '10px' }}>
                    {skill.icon}
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em',
                      marginBottom: '12px',
                    }}
                  >
                    {skill.name}
                  </div>

                  {/* Skill level bar */}
                  <div
                    style={{
                      height: '2px',
                      background: 'var(--border-dim)',
                      borderRadius: '99px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="skill-bar-fill"
                      data-level={skill.level}
                      style={{
                        height: '100%',
                        width: '0%',
                        background: 'linear-gradient(90deg, var(--gold), var(--lotus))',
                        borderRadius: '99px',
                        transition: 'width 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
