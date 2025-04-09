import React, { useState } from 'react'
import DataFormat from '../../data/DataFormat.json'
import '../styles/ListSection.css' // Your custom styles

export default function ListSection () {
  const [activeIndex, setActiveIndex] = useState(null)

  const data = DataFormat[0] // Since your JSON is an array with one object
  const services = data.serviceslist

  return (
    <section className='section-container'>
      <div className='section-header'>
        <span className='page-title'>✨ {data.sectionTitle}</span>
        <h1>
          <span className='headline'>{data['headline-start']}</span>
          <span className='gradint-headline'> {data['gradiant-headline']}</span>
          <span className='headline'> {data['headline-end']}</span>
        </h1>
        <p className='subheadline'>{data.subHeadline}</p>
        <a href={data.cta.link} className='section-link'>
          {data.cta.text}
        </a>
      </div>

      <div className='content-area'>
        <div className='left-pane'>
          <div className='feature-list'>
            {services.map((item, index) => (
              <div
                key={index}
                className='feature-item'
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='right-pane'>
          <div className='image-overlay'>
            <div className='icon-display'>
              {activeIndex !== null &&
                services[activeIndex].listicons.map((iconObj, i) => (
                  <div key={i} className='icon-set'>
                    <img
                      src={`/icons/${iconObj.icon}`}
                      alt={iconObj.name}
                      style={{ width: '40px', margin: '10px' }}
                    />
                    <p style={{ color: '#fff', fontSize: '0.8rem' }}>{iconObj.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
