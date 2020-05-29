import React, { Component } from 'react';
import image from '../assets/profiled.jpg';
class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.portfolio = props.portfolio;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
        <div className="w-100">
       
          <h2 className="mb-5">portfolio</h2>
          <p>{this.portfolio.paragraphOne}</p>
          <p className="mb-0">{this.portfolio.paragraphTwo}</p>
        </div>
        <div className="container-portolio">
            <img src={image} alt="Avatar" className="portfolio-image" />
            <div className="portfolio-overlay">
              <div className="portfolio-text">Hello World</div>
            </div>
          </div>
      </section>
    );
  }
}

export default Portfolio;