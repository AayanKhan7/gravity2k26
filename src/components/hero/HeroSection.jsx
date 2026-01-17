import React from 'react'
import { Link } from 'react-scroll'
import { SITE_CONFIG } from '../../data'

export default function HeroSection() {

  // --- LEFT ARC (REBEL SHIPS) ---
  const leftArcFleet = [
    { id: 1, width: '120px', top: '10%', left: '5%', z: 10 },
    { id: 2, width: '220px', top: '25%', left: '12%', z: 20 },
    { id: 3, width: '350px', top: '45%', left: '20%', z: 30 },
  ]

  // --- RIGHT ARC (EMPIRE SHIPS) ---
  const rightArcFleet = [
    { id: 1, width: '100px', top: '10%', right: '5%', z: 10 },
    { id: 2, width: '180px', top: '25%', right: '12%', z: 20 },
    { id: 3, width: '280px', top: '45%', right: '20%', z: 30 },
  ]

  return (
    <section
      className="hero-overlay"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      {/* ===== LEFT ARC SHIPS ===== */}
      {leftArcFleet.map((ship) => (
        <img
          key={ship.id}
          src="/assets/images/right-ship.png"
          alt="Rebel Ship"
          style={{
            position: 'absolute',
            width: ship.width,
            top: ship.top,
            left: ship.left,
            zIndex: ship.z,
            pointerEvents: 'none',
            transform: 'scaleX(-1)',
            filter: 'drop-shadow(0 0 18px rgba(255, 60, 60, 0.35))',
          }}
        />
      ))}

      {/* ===== RIGHT ARC SHIPS ===== */}
      {rightArcFleet.map((ship) => (
        <img
          key={ship.id}
          src="/assets/images/left-ship.png"
          alt="Empire Ship"
          style={{
            position: 'absolute',
            width: ship.width,
            top: ship.top,
            right: ship.right,
            zIndex: ship.z,
            pointerEvents: 'none',
            transform: 'scaleX(-1)',
            filter: 'drop-shadow(0 0 18px rgba(255, 215, 0, 0.35))',
          }}
        />
      ))}

      {/* ===== CENTER CONTENT ===== */}
      <div
        className="hero-content"
        style={{
          zIndex: 40,
          textAlign: 'center',
          marginTop: '-15vh',
        }}
      >
        <img
          src="/assets/images/Gravity logo.PNG"
          alt="Gravity 2K26"
          style={{
            height: '200px',
            marginBottom: '30px',
            filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.25))',
          }}
        />

        <p className="hero-subtitle" style={{ marginBottom: '30px' }}>
          {SITE_CONFIG.tagline}
        </p>

        <Link to="events" smooth offset={-100} duration={600}>
          <button className="hero-btn primary">
            Explore Events
          </button>
        </Link>
      </div>

    </section>
  )
}
