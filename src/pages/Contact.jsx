import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Section>
      <h1>Contact Us</h1>
      <ContactDetails>
        <p>Email: <a href='mailto:sh@squarehack.in'>sh@squarehack.in</a></p>
        <p>Mobile: <a href='tel:+918178508993'>8178508993</a></p>
      </ContactDetails>
      <ContactForm>
        <h2>Send Us a Message</h2>
        <form>
          <label>
            Name:
            <input type='text' name='name' required />
          </label>
          <label>
            Email:
            <input type='email' name='email' required />
          </label>
          <label>
            Message:
            <textarea name='message' required />
          </label>
          <button type='submit'>Send</button>
        </form>
      </ContactForm>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`

const ContactDetails = styled.div`
  margin-bottom: 2rem;
`

const ContactForm = styled.div`
  max-width: 600px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 1rem;
    }

    input, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    button {
      padding: 0.75rem;
      background: ${({ theme }) => theme.toggleBorder};
      color: ${({ theme }) => theme.bodyBg};
      border: none;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.toggleHoverBg};
      }
    }
  }
`

export default Contact
