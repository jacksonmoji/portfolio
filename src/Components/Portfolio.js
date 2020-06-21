import React, { Component } from 'react';
import image from '../assets/add_translation_bantuweb.png';
import '../App.css'
class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.portfolio = props.portfolio;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="portfolio">
        
        <div className="w-100">
        <h2 className="mb-0">Portfolio</h2>
        
        <div className="container">
         
          <img src={image}/>
           <img src={image}/>
            <img src={image}/>
             <img src={image}/>
        </div>
      </div>
      </section>
    );
  }
}

export default Portfolio;