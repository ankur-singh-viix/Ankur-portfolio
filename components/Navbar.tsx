'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// ✏️ Edit nav links here
const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Journey',    href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      const y = window.scrollY + 120
      sections.forEach((s) => {
        const el = s as HTMLElement
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive('#' + el.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 6vw, 80px)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px)',
        background: scrolled ? 'rgba(7,5,26,0.88)' : 'rgba(7,5,26,0.5)',
        borderBottom: `1px solid ${scrolled ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.05)'}`,
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      {/* ✏️ Edit your logo/name */}
      <a
        href="#hero"
        className="hover-target"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />

        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--text-primary)',
          }}
        >
          <span className="gradient-text">Ankur</span>{' '}
          <span className="gradient-text">Singh</span>
        </div>
</a>


      {/* Desktop links */}
      <ul
        style={{
          display: 'flex', gap: '2.5rem', listStyle: 'none',
        }}
        className="hidden-mobile"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover-target"
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: active === link.href ? 'var(--gold)' : 'var(--text-secondary)',
                position: 'relative',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
              {active === link.href && (
                <span
                  style={{
                    position: 'absolute', left: 0, bottom: '-4px', right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, var(--gold), var(--lotus))',
                    borderRadius: '99px',
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="btn-ghost hover-target" style={{ fontSize: '0.72rem' }}>
        Let&apos;s Connect ✦
      </a>

      <style>{`
        @media (max-width: 800px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
