import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Section>
      <h1>Our Portfolio</h1>
      <StyledSlider {...settings}>
        <div>
          <img src='https://via.placeholder.com/800x400' alt='Project 1' />
          <p>Project 1: E-commerce Platform</p>
        </div>
        <div>
          <img src='https://via.placeholder.com/800x400' alt='Project 2' />
          <p>Project 2: Mobile Banking App</p>
        </div>
        <div>
          <img src='https://via.placeholder.com/800x400' alt='Project 3' />
          <p>Project 3: Social Media Dashboard</p>
        </div>
      </StyledSlider>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`

const StyledSlider = styled(Slider)`
  .slick-slide img {
    margin: auto;
  }
`

export default Portfolio
