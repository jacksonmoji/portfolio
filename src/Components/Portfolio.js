import React, { Component } from 'react';

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
      </section>
    );
  }
}

export default Portfolio;