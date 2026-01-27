import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <ol className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/p_details">Details</Link></li>
     </ol>
    </div>
  )
}

export default Navbar
