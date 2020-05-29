import React, { Component } from 'react';
import image from '../assets/profile_.jpg'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-50">
          <h2 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h2>
          {/* <div className="subheading mb-5">
            <a href="mailto:name@email.com">{this.landingData.email}</a>
          </div> */}
          <p className="lead mb-5">{this.landingData.bio}</p>

        </div>
        <div className="w-50">
          <img className="img-fluid img-profile rounded-circle mx-auto" src={image} alt=""></img>
        </div>
      </section>
    );
  }
}

export default Landing;