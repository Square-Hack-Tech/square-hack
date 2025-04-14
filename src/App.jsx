import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { lightTheme } from './styles/themes'
import { useTheme } from './context/ThemeContext'
import router from './routes/router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const { themeColor } = useTheme()

  return (
    <ThemeProvider theme={themeColor || lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          {router.map((ele, i) => {
            return <Route key={i} {...ele} />
          })}
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default App
