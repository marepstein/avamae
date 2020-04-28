import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/Logo.svg'

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <img className="logo" src={logo} />
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
          Login
        </Link>
      </ul>
    </nav>
  )

  // return (
  //   <nav
  //     className="navbar is-white is-fixed-top"
  //     role="navigation"
  //     aria-label="main navigation"
  //   >
  //     <div className="navbar-brand">
  //       <Link className="navbar-item" to="/">
  //         <img src={logo} alt="logo" width="250" height="28" />
  //       </Link>
  //     </div>

  //     <div className="navbar-end is-hidden-mobile">
  //       <div className="navbar-item">
  //         <Link className="navbar-link is-arrowless" to="/">
  //           Home
  //         </Link>
  //       </div>
  //       <div className="navbar-item">
  //         <Link className="navbar-link is-arrowless" to="/about">
  //           About Us
  //         </Link>
  //       </div>
  //       <div className="navbar-item">
  //         <Link className="navbar-link is-arrowless" to="/contact">
  //           Contact Us
  //         </Link>
  //       </div>
  //       <div className="navbar-item">
  //         <Link className="navbar-link is-arrowless" to="/">
  //           Login
  //         </Link>
  //       </div>
  //     </div>
  //   </nav>
  // )
}

export default Navbar
