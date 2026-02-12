'use client'

import { useRef, useEffect } from 'react'
import { addTilt } from '@/utils/animations'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index:   number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) addTilt(cardRef.current, { maxTilt: 8, perspective: '900px' })
  }, [])

  return (
    <div
      ref={cardRef}
      className="hover-target"
      style={{
        borderRadius: '20px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dim)',
        overflow: 'hidden',
        transition: 'box-shadow 0.4s, border-color 0.3s',
        position: 'relative',
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border-gold)'
        el.style.boxShadow = `0 30px 80px rgba(0,0,0,0.5), var(--glow-gold)`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = ''
        el.style.boxShadow = ''
      }}
    >
      {/* Animated gradient border on hover via pseudo — using box-shadow instead */}

      {/* Preview area */}
      <div
        style={{
          height: '190px',
          background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}08)`,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {/* Large watermark letter */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '6rem',
            fontWeight: 900,
            opacity: 0.05,
            letterSpacing: '-0.05em',
            userSelect: 'none',
            color: project.accentColor,
          }}
        >
          {project.title.charAt(0)}
        </span>

        {/* Sacred geometry accent */}
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120px', height: '120px',
            border: `1px solid ${project.accentColor}25`,
            borderRadius: '50%',
            animation: 'spin-slow 20s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80px', height: '80px',
            border: `1px solid ${project.accentColor}15`,
            transform: 'translate(-50%, -50%) rotate(45deg)',
          }}
        />

        {/* Badge */}
        <span
          style={{
            position: 'absolute', top: '14px', right: '14px',
            background: `${project.accentColor}18`,
            border: `1px solid ${project.accentColor}35`,
            borderRadius: '8px',
            padding: '4px 12px',
            fontFamily: 'var(--font-code)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: project.accentColor,
          }}
        >
          {project.badge}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '26px 28px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '10px',
            letterSpacing: '0.02em',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
            marginBottom: '18px',
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '22px' }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px',
              borderRadius: '10px',
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}28`,
              fontFamily: 'var(--font-code)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: project.accentColor,
              textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = `${project.accentColor}24`
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = `${project.accentColor}12`
            }}
          >
            ↗ Live Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target"
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              padding: '10px',
              borderRadius: '10px',
              background: 'var(--border-dim)',
              border: '1px solid var(--border-dim)',
              fontFamily: 'var(--font-code)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.08)'
              el.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--border-dim)'
              el.style.color = 'var(--text-secondary)'
            }}
          >
            ⌥ Code
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
    </div>
  )
}
