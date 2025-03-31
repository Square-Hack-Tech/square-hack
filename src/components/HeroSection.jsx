import React from "react";
import data from './data/data.json';
import "./styles/HeroSection.css";


const HeroSection = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <span className="badge">{data.badge}</span>
          <h1>
            <span className="gradient-text">{data.titlePart1}</span> {data.titlePart2}
          </h1>
          <p>{data.description}</p>
          <button className="cta-button">{data.buttonText} &rarr;</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;