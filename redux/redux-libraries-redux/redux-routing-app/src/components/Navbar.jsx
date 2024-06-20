import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>

    <nav className='nav navbar navbar-expand-md bg-dark p-3 text-white'>
    <ul>
    <li><Link to="/"> Home</Link></li>
    <li><Link to="/about-us"> About us</Link></li>
    <li><Link to="/services"> Services</Link></li>
    <li><Link to="/contact-us"> Contact</Link></li>
    <li><Link to="/acount"> Account</Link></li>
    </ul>
    </nav>
      
    </div>
  )
}
