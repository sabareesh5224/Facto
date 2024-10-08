import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h3 className='header'><b>FACTO</b></h3>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/crypto'>Crypto</Link></li>
            <li><Link to='/Robotics'>Robotics</Link></li>
            <li><Link to='/AI'>AI</Link></li>
            <li><Link to='/Mechanical'>Mech</Link></li>
            <li><Link to='/Electrical'>Electric</Link></li>
            <li><Link to='/facts' className='last'>Facts</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar