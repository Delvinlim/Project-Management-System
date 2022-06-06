import React, { useState } from 'react'
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Logo from '../../assets/img/Logo.png'

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [mobileActive, setMobileActive] = useState(false)
  
  const handleMobileNavClick = () => {
    setMobileActive(false)
  }
  
  const handleToggle = () => {
    setMobileActive(!mobileActive)
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);


  return (
    <header id="header" className="fixed-top d-flex align-items-center" style={{ boxShadow: visible ? '0px 2px 15px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <div className="container d-flex align-items-center">

        <div className="logo me-auto">
          <LinkRouter to='/'><img src={Logo} alt="Logo" className="img-fluid" /></LinkRouter>
        </div>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileActive ? "navbar-mobile" : ""}`}>
          <ul>
            <li><LinkScroll to='hero' offset={-80} activeClass='active' spy={true} className='nav-link' onClick={handleMobileNavClick}>Home</LinkScroll></li>
            <li><LinkScroll to='about' offset={-40} activeClass='active' spy={true} className='nav-link' onClick={handleMobileNavClick}>About</LinkScroll></li>
            <li><LinkScroll to='services' offset={-40} activeClass='active' spy={true} className='nav-link' onClick={handleMobileNavClick}>Services</LinkScroll></li>
            <li><LinkScroll to='reviews' offset={-40} activeClass='active' spy={true} className='nav-link' onClick={handleMobileNavClick}>Reviews</LinkScroll></li>
            <LinkRouter to="/student/login" className='primary'>Login</LinkRouter>
          </ul>
          {/* <i className={`${isMobile ? "bi bi-list mobile-nav-toggle" : ""}`}></i> */}
          <i className={`bi bi-list mobile-nav-toggle ${mobileActive ? "bi-list bi-x" : ""}`} onClick={handleToggle}></i>
        </nav>

      </div>
    </header>    
    
  )
}

export default Header