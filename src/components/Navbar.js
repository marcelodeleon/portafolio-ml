import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <img src="./marce.png" style={{ width: "50px"}} />
      <div className="links">
        <Link to="/">Principal</Link>
        <Link to="/about">Sobre mi</Link>
        <Link to="/projects">Proyectos</Link>
      </div>
    </nav>
  )
}
