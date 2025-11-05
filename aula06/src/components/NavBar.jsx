import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <header className="navbar">
        <h1>Meu Site</h1>
        <nav>
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/noticias" className="nav-link">Notícias</Link>
            <Link to="/a-faculdade" className="nav-link">A Faculdade</Link>
            <Link to="/dpo-lgpd" className="nav-link">DPO LGPD</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
        </nav>
      </header>
    </div>
  )
}

export default NavBar