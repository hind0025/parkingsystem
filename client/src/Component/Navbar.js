import React from 'react'
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">
        <h1>MyWebsite</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">parking</a></li>
        <li><a href="#services">booking</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar