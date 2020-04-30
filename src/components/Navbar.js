import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/Logo.svg'

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="about" to="/about-us">
          About Us
        </Link>
        <Link className="contact" to="/contact-us">
          Contact Us
        </Link>
        <Link className="login" to="/">
          <button>Log in</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
