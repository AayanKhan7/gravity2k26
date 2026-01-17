import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 20, background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 20px' }}>
      <ul className="nav-links" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <li><Link to="hero" spy={true} smooth={true} offset={-80} duration={500}>HOME</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-80} duration={500}>ABOUT</Link></li>
        <li><Link to="events" spy={true} smooth={true} offset={-80} duration={500}>EVENTS</Link></li>
        <li><Link to="sponsors" spy={true} smooth={true} offset={-80} duration={500}>SPONSORS</Link></li>
      </ul>
    </nav>
  )
}
