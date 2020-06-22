import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.NavigationData = props.NavigationData;
  }

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#about" className="navigation__link">About</a></li>
            <li className="navigation__item"><a href="#education" className="navigation__link">Education</a></li>
            <li className="navigation__item"><a href="#experience" className="navigation__link">Experience</a></li>
            <li className="navigation__item"><a href="#tools" className="navigation__link">Tools</a></li>
            <li className="navigation__item"><a href="#projects" className="navigation__link">Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;