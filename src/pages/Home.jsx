import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Section>
      <h1>Welcome to Square Hack</h1>
      <p>Your trusted IT partner providing innovative solutions.</p>
      <p>We specialize in software development, web design, and IT consulting.</p>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`

export default Home
