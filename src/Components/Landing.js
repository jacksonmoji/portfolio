import React, { Component } from 'react';
import logo_1 from '../assets/img/logo/logo_1.png';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <div className="header">
        <div className="header__logo-box">
          <img srcset={logo_1} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary"> 
            <span className="heading-primary--main">Hi, I'm Jackson</span>
            <span className="heading-primary--sub">I develop software</span>
          </h1>

          <a href="#projects" className="btn btn__bicolor--antiquewhite btn--animated">  Resume </a>
          <a href="#projects" className="btn btn__bicolor--dark btn--animated"> My Work </a>

        </div>
      </div>
    );
  }
}

export default Landing;