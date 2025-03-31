import styled, { keyframes } from 'styled-components'
import { useTheme } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.svg'  // Ensure this image has a transparent background

const Navbar = () => {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <Nav>
      <NavLeft>
      <Logo src={logo} alt="Logo" />
      </NavLeft>
      {/* <Divider themeMode={themeMode} /> */}
      <NavCenter>
        <NavLinks>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
          <NavLink to='/team'>Team</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </NavLinks>
      </NavCenter>
      <NavRight>
        {/* <Divider themeMode={themeMode} /> */}
        <ThemeToggle onClick={toggleTheme}>
          {themeMode === 'light' ? 'Dark Mode' : themeMode === 'dark' ? 'Multi Mode' : 'Light Mode'}
        </ThemeToggle>
      </NavRight>
    </Nav>
  )
}

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`

const rotate3D = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.navBg};
  animation: ${floatAnimation} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`

const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }
`

const NavLinks = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const NavLink = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  transform: perspective(500px);
  transition: transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.navHover};
    transform: perspective(500px) rotateY(10deg);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const Divider = styled.div`
  height: 2rem;
  width: 1px;
  background: ${({ theme, themeMode }) => themeMode === 'light' ? theme.lightDividerBg : theme.darkDividerBg};
  border-radius: ${({ theme, themeMode }) => themeMode === 'light' ? theme.lightDividerRadius : theme.darkDividerRadius};
  border-width: ${({ theme, themeMode }) => themeMode === 'light' ? theme.lightDividerWidth : theme.darkDividerWidth};
  border-color: ${({ theme, themeMode }) => themeMode === 'light' ? theme.lightDividerColor : theme.darkDividerColor};
  border-style: solid;
  margin: 0 1rem;

  @media (max-width: 768px) {
    height: 1px;
    width: 100%;
    margin: 1rem 0;
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.toggleText};
  animation: ${floatAnimation} 3s ease-in-out infinite;

  &:hover {
    background: ${({ theme }) => theme.toggleHoverBg};
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  animation: ${rotate3D} 5s linear infinite;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export default Navbar
