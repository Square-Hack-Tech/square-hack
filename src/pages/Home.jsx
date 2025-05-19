import React from 'react'
import HeroSection from '../components/HeroSection'
import ListSection from '../components/ListSection'
import FormSection from '../components/FormSection'
import Testimonials from '../components/Testimonials'
import Solutions from '../components/Solutions'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ListSection />
      <Solutions />
      <Testimonials />
      <FormSection />
    </>
  )
}

export default Home
