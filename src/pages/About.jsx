import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Section>
      <h1>About Us</h1>
      <p>
        Square Hack is a leading IT company dedicated to providing top-notch
        software solutions to businesses of all sizes. Our mission is to deliver
        high-quality products that drive success and innovation.
      </p>
      <p>
        Founded in 2010, we have over a decade of experience in the IT industry.
        Our team of experts is skilled in the latest technologies and trends to
        ensure your business stays ahead of the curve.
      </p>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`

export default About
