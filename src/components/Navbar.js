import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <div className="links">
        <Link to="/">Principal</Link>
        <Link to="/about">Sobre mi</Link>
        <Link to="/projects">Proyectos</Link>
      </div>
    </nav>
  )
}
