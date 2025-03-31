import React from 'react'
import styled from 'styled-components'

const Team = () => {
  return (
    <Section>
      <h1>Our Team</h1>
      <Profile>
        <img src='https://via.placeholder.com/150' alt='Developer' />
        <ProfileDetails>
          <h2>Jane Doe</h2>
          <p>Role: Lead Developer</p>
          <p>
            Jane is an expert in full-stack development with over 10 years of
            experience. She specializes in building scalable web applications
            using the latest technologies.
          </p>
        </ProfileDetails>
      </Profile>
      <Profile>
        <img src='https://via.placeholder.com/150' alt='Designer' />
        <ProfileDetails>
          <h2>John Smith</h2>
          <p>Role: UI/UX Designer</p>
          <p>
            John is a talented designer focused on creating intuitive and
            engaging user interfaces. His designs are both beautiful and
            functional.
          </p>
        </ProfileDetails>
      </Profile>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  img {
    border-radius: 50%;
    margin-right: 2rem;
  }
`

const ProfileDetails = styled.div`
  text-align: left;
`

export default Team
