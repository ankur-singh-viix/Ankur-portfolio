'use client'

import { useEffect, useRef, useState } from 'react'
import { revealFade, revealLeft, revealRight } from '@/utils/animations'

// ✏️ Edit your social links here
const SOCIALS = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/ankur-singh-iitg/', icon: 'li' },
  { label: 'GitHub',    href: 'https://github.com/ankur-singh-viix', icon: 'git' },
 
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    revealFade(sectionRef.current.querySelector('.section-tag')!)
    revealLeft(sectionRef.current.querySelector('.contact-info')!)
    revealRight(sectionRef.current.querySelector('.contact-form')!)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-wrap"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.08) 0%, transparent 70%)',
      }}
    >
      <div className="section-tag">Connect</div>
      <h2 className="section-title">
        Open the <span className="gradient-text">Portal</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 'clamp(48px, 8vw, 100px)',
          alignItems: 'start',
          marginTop: '64px',
        }}
        className="contact-layout"
      >
        {/* ── Info ─────────────────────────────── */}
        <div className="contact-info">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '0.02em',
            }}
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text">remarkable</span> together.
          </h3>

          {/* ✏️ Edit contact message */}
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: '1.8',
              marginBottom: '32px',
              fontStyle: 'italic',
            }}
          >
            &quot;When two seekers align, mountains move.&quot; Whether you have a project,
            a collaboration, or simply want to explore what&apos;s possible — I welcome
            your message.
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target glass"
                title={s.label}
                style={{
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 600,
                  transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--border-gold)'
                  el.style.color       = 'var(--gold)'
                  el.style.boxShadow   = 'var(--glow-gold)'
                  el.style.transform   = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = ''
                  el.style.color       = ''
                  el.style.boxShadow   = ''
                  el.style.transform   = ''
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* ✏️ Add your direct email */}
          <div
            style={{
              marginTop: '32px',
              padding: '18px 22px',
              borderRadius: '14px',
              background: 'rgba(245,158,11,0.06)',
              border: '1px solid var(--border-gold)',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              color: 'var(--gold)',
              letterSpacing: '0.06em',
            }}
          >
            ✦ your.email@example.com
          </div>
        </div>

        {/* ── Form ─────────────────────────────── */}
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dim)',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 48px)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {[
              { label: 'Your Name',    type: 'text',  placeholder: 'What shall I call you?',      required: true  },
              { label: 'Your Email',   type: 'email', placeholder: 'Where can I reach you?',       required: true  },
            ].map((field) => (
              <div key={field.label} style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="input-sacred"
                />
              </div>
            ))}

            <div style={{ marginBottom: '22px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                }}
              >
                Your Message
              </label>
              <textarea
                placeholder="What would you like to manifest together?"
                rows={5}
                className="input-sacred"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              className="hover-target"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                background: sent
                  ? 'linear-gradient(135deg, #059669, #10b981)'
                  : 'linear-gradient(135deg, var(--gold), var(--lotus))',
                color: '#0a0618',
                fontFamily: 'var(--font-code)',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                cursor: 'none',
                transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.3s, background 0.4s',
                boxShadow: '0 0 30px rgba(245,158,11,0.25)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform  = 'translateY(-2px)'
                el.style.boxShadow  = 'var(--glow-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform  = ''
                el.style.boxShadow  = ''
              }}
            >
              {sent ? '✦ Message Sent — Namaste!' : 'Send Message ✦'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
