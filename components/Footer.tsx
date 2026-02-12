export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '44px clamp(20px, 8vw, 120px)',
        borderTop: '1px solid var(--border-dim)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {/* Gradient top line — sacred */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '300px', height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold), var(--lotus), transparent)',
        }}
      />

      {/* ✏️ Edit footer text */}
      <p
        style={{
          fontFamily: 'var(--font-code)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
        }}
      >
        © 2026{' '}
        <span style={{ color: 'var(--gold)' }}>Ankur Singh</span>
        {' '}· Built with ✦ intention & code.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-code)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {/* ✏️ Edit tagline */}
        IIT Guwahati · AI & Full-Stack Developer
      </p>
    </footer>
  )
}
