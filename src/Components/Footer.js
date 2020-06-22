import React, { Component } from 'react';
import logo_1 from './img/logo/logo_1.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.FooterData = props.FooterData;
  }
  render() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
            <img src={logo_1} alt="logo" className="footer__logo"></img>
            </div>
            <div className="row">
            <div className="col-2-of-4">
                <div className="footer__social">
                    <ul className="footer_list">
                    <li className="footer__item"><a href="https://linkedin.com/in/jackson-thapelo-moji-5515167a" className="footer__link"><FaLinkedin /></a></li>
                    <li className="footer__item"><a href="mailto:jacksonmoji@gmail.com" className="footer__link"><FaEnvelope /></a></li>
                    <li className="footer__item"><a href="https://twitter.com/jacksonmoji" className="footer__link"><FaTwitter /></a></li>
                    <li className="footer__item"><a href="https://github.com/jacksonmoji" className="footer__link"><FaGithub /></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-2-of-4">
                <div className="footer__social">
                    <p className="footer__copyright">
                    Created by <span className="footer__text--name" > Jackson Moji </span>
                    </p>
                </div>
            </div>
            </div>
        </footer>
    );
  }
}

export default Footer;