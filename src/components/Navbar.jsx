import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container container2">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Category</Link></li>
          <li><Link to="#">Menu</Link></li>
          <li><Link to="#">Testimonial</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
        <h1 class="logo">Navbar</h1>
      </div>
    </nav>
  )
}

export default Navbar