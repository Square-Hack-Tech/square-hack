import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import logo from '../../public/logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      <nav className={`navbar ${themeMode} ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-links">
            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            <Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            <Link className="nav-link" to="/team" onClick={closeMenu}>Team</Link>
            <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact Us</Link>
          </div>
        </div>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {themeMode === 'light' ? 'Dark Mode' : themeMode === 'dark' ? 'Multi Mode' : 'Light Mode'}
          </button>
          <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          >
          {isMenuOpen ? '✕' : '☰'}
          </button>
          <div 
             className={`menu-overlay ${isMenuOpen ? "active" : ""}`} 
            onClick={closeMenu}
          />
        </div>
      </nav>
      
      {/* Overlay that appears when menu is open */}
      
    </>
  );
};

export default Navbar;