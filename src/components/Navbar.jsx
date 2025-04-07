import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import logo from '../../public/logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <nav className={`navbar ${themeMode}`}>
      <div className='navbar-left'>
        <img src={logo} alt='Logo' className='logo' />
      </div>

      <div className='navbar-center'>
        <div className='nav-links'>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/portfolio'>Portfolio</Link>
          <Link className='nav-link' to='/team'>Team</Link>
          <Link className='nav-link' to='/contact'>Contact Us</Link>
        </div>
      </div>

      <div className='navbar-right'>
        <button className='theme-toggle' onClick={toggleTheme}>
          {themeMode === 'light' ? 'Dark Mode' : themeMode === 'dark' ? 'Multi Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
