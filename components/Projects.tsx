'use client'

import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/data/projects'
import { revealFade, revealUp } from '@/utils/animations'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    revealFade(sectionRef.current.querySelector('.section-tag')!)
    revealUp(sectionRef.current.querySelector('.section-title')!)

    // Stagger project cards
    const cards = sectionRef.current.querySelectorAll('.project-reveal')
    cards.forEach((card, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ;(card as HTMLElement).style.opacity    = '1'
              ;(card as HTMLElement).style.transform  = 'translateY(0)'
            }, i * 120)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(card)
    })
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-wrap"
      style={{
        background: 'radial-gradient(ellipse 70% 40% at 20% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)',
      }}
    >
      {/* Decorative glow */}
      <div
        className="glow-orb"
        style={{
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)',
          top: '20%', right: '-5%',
        }}
      />

      <div className="section-tag">My Work</div>
      <h2 className="section-title">
        Sacred <span className="gradient-text">Creations</span>
      </h2>
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          fontStyle: 'italic',
          maxWidth: '560px',
          marginTop: '12px',
          marginBottom: 0,
        }}
      >
        Each project is a meditation — built with intention, crafted with care.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginTop: '64px',
        }}
        className="projects-grid"
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="project-reveal"
            style={{
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
