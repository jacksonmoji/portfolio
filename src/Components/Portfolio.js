import React, { Component } from 'react';
// import image from '../assets/profiled.jpg';
import '../App.scss'
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
            {/* effect #2*/}
            <div className="content-block__effect">
          
              <div className="portfolio-effect">
                {/* portfolio item */}
                <div className="portfolio-item portfolio-effect__item portfolio-item--eff2">
                  <img className="portfolio-item__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-5.jpg" alt="Portfolio Item" width={826} height={551} />
                  <div className="portfolio-item__info">
                    <h3 className="portfolio-item__header">Web Development</h3>
                    <div className="portfolio-item__links">
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">link</i>
                        </a>
                      </div>
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">search</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* portfolio item */}
                <div className="portfolio-item portfolio-effect__item portfolio-item--eff2">
                  <img className="portfolio-item__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-8.jpg" alt="Portfolio Item" width={826} height={551} />
                  <div className="portfolio-item__info">
                    <h3 className="portfolio-item__header">Web Development</h3>
                    <div className="portfolio-item__links">
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">link</i>
                        </a>
                      </div>
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">search</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* portfolio item */}
                <div className="portfolio-item portfolio-effect__item portfolio-item--eff2">
                  <img className="portfolio-item__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/694606/eff-10.jpg" alt="Portfolio Item" width={826} height={551} />
                  <div className="portfolio-item__info">
                    <h3 className="portfolio-item__header">Web Development</h3>
                    <div className="portfolio-item__links">
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">link</i>
                        </a>
                      </div>
                      <div className="portfolio-item__link-block">
                        <a className="portfolio-item__link" href="#" title="Link Title">
                          <i className="material-icons">search</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    

      {/* </div> */}
          {/* <h2 className="mb-5">portfolio</h2>
          <p>{this.portfolio.paragraphOne}</p>
          <p className="mb-0">{this.portfolio.paragraphTwo}</p> */}
        
      </section>
    );
  }
}

export default Portfolio;