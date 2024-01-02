import React from 'react'
import './Navbar.css';
import { RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
function Navbar() {
  return (
    <div className="Navbar-nav">
      <div className="Navbar-nav-link">
        <div className="Navbar-nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Navbar-link-container">
         <p><a href ="#home">Home </a></p>
         <p><a href ="#Whatconjer">What is Conjerous</a></p>
         <p><a href ="#possibility">Open Ai </a></p>
         <p><a href ="#features">Case study</a></p>
         <p><a href ="#blog">library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar