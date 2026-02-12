'use client'

import { useEffect, useRef } from 'react'
import { TIMELINE } from '@/data/experience'
import { revealFade, revealUp } from '@/utils/animations'

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    revealFade(sectionRef.current.querySelector('.section-tag')!)
    revealUp(sectionRef.current.querySelector('.section-title')!)

    const items = sectionRef.current.querySelectorAll('.timeline-entry')
    items.forEach((item, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ;(item as HTMLElement).style.opacity   = '1'
              ;(item as HTMLElement).style.transform = 'translateX(0)'
            }, i * 150)
            observer.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(item)
    })
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-wrap"
      style={{
        background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(129,140,248,0.06) 0%, transparent 70%)',
      }}
    >
      <div className="section-tag">My Journey</div>
      <h2 className="section-title">
        The <span className="gradient-text">Path</span> Walked
      </h2>

      {/* Timeline */}
      <div
        style={{
          position: 'relative',
          marginTop: '72px',
          paddingLeft: 'clamp(32px, 6vw, 80px)',
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, var(--gold), var(--lotus), transparent)',
          }}
        />

        {TIMELINE.map((entry, i) => (
          <div
            key={i}
            className="timeline-entry"
            style={{
              position: 'relative',
              paddingBottom: i < TIMELINE.length - 1 ? '52px' : 0,
              opacity: 0,
              transform: 'translateX(-30px)',
              transition: 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Glowing dot */}
            <div
              style={{
                position: 'absolute',
                left: `calc(-1 * clamp(32px, 6vw, 80px) - 6px)`,
                top: '8px',
                width: '13px', height: '13px',
                borderRadius: '50%',
                background: entry.type === 'work'
                  ? 'linear-gradient(135deg, var(--gold), var(--lotus))'
                  : 'linear-gradient(135deg, var(--aura), var(--lotus))',
                boxShadow: entry.type === 'work'
                  ? '0 0 18px rgba(245,158,11,0.6), 0 0 40px rgba(245,158,11,0.2)'
                  : '0 0 18px rgba(129,140,248,0.6), 0 0 40px rgba(129,140,248,0.2)',
                zIndex: 1,
              }}
            />

            {/* Content card */}
            <div
              className="glass hover-target"
              style={{
                borderRadius: '18px',
                padding: '28px 32px',
                cursor: 'default',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = entry.type === 'work' ? 'var(--border-gold)' : 'var(--border-lotus)'
                el.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = ''
                el.style.transform = ''
              }}
            >
              {/* Type badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    background: entry.type === 'work'
                      ? 'rgba(245,158,11,0.1)' : 'rgba(129,140,248,0.1)',
                    border: entry.type === 'work'
                      ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(129,140,248,0.25)',
                    color: entry.type === 'work' ? 'var(--gold)' : 'var(--aura)',
                  }}
                >
                  {entry.type === 'work' ? '⚡ Work' : '🎓 Education'}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--lotus)',
                  }}
                >
                  {entry.date}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                  letterSpacing: '0.02em',
                }}
              >
                {entry.role}
              </h3>

              <div
                style={{
                  fontSize: '0.9rem',
                  color: entry.type === 'work' ? 'var(--gold)' : 'var(--aura)',
                  marginBottom: '14px',
                  fontStyle: 'italic',
                }}
              >
                {entry.org}
                {entry.location && (
                  <span style={{ color: 'var(--text-muted)', marginLeft: '8px', fontStyle: 'normal' }}>
                    · {entry.location}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.72', marginBottom: '16px' }}>
                {entry.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {entry.tags.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
