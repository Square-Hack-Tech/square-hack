import React from 'react'
import '../styles/Testimonials.css'
import testimonialsData from '../../data/testimonialData.json'

const Testimonials = () => {
  return (
    <div className='services-container'>
      <div className='section-header'>
        <span className='page-title'>✨ Testimonials</span>
        <h1>
          <span className='headline'>Helping our  </span>
          <span className='gradient-headline'>clients succeed with our services</span>
        </h1>
        <p className='subheadline'>Hear from businesses that have transformed with our services</p>
        <a href='#contact' className='section-link'>View All Testimonials </a>
      </div>

      <div className='testimonials-grid'>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-card'>
            <div className='rating'>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className='quote'>"{testimonial.quote}"</p>
            <div className='author-info'>
              <div className='author-image'>
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className='author-details'>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <div className='divider' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
