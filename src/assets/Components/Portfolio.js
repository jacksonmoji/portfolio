import React, { Component } from 'react';
import project_p1 from '../img/bantuweb-add-translation.png';
import project_p2 from '../img/portfolio.png'
import { FaPython, FaAngular,FaSass, FaJs,FaCss3,FaReact, FaBootstrap, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { DiDjango, DiPostgresql, DiAws } from 'react-icons/di';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.portfolio = props.portfolio;
    this.privateRepo =  this.privateRepo.bind(this);
  }

  privateRepo () {
    alert('Please request access from Jackson to view the source code.');
  }

  render() {
    
    return(
      <section className="section-projects" id="projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Projects
          </h2>
        </div>
        <div className="row">
          <div className="col-2-of-4">
            <div className="file">
              <div className="file__side file__side--front">
                <img src={project_p1} alt="bantuweb"></img>
              </div>
              <div className="file__side file__side--back file__side--back-1">
                <a href="http://bit.ly/bantuweb" className="btn btn--blue btn--animated"><FaExternalLinkAlt /></a>
                <a href="#" className="btn btn--dark btn--animated" onclick={this.privateRepo}><FaGithub /> </a>
              </div>
            </div>
          </div>
          <div className="col-2-of-4">
          <h3 className="heading-tertiary u-margin-bottom-small">BantuWeb MSc Project</h3>    
            <p className="paragraph"> 
              This is a deliverable from my MSc Computer Science research. Essentially, Bantuweb is a document discovery and crowd-sourcing platform, of which I developed in efforts to translate articles extracted from Wikipedia to indigenous South Africa languages. This is done with participants' help. Also, I incorporated gratification as a means to motivate participants to contribute and engage more in BantuWeb. Other ways to contribute in the platform is by writing blogs/stories and uploading digital documents written in any of the indigenous South African languages.
            </p>
            <p className="skills__big">
              <DiAws /> <FaPython /> <DiPostgresql /> <DiDjango /> <FaJs /> <FaAngular /> <FaBootstrap />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-2-of-4">
            <div className="file">
              <div className="file__side file__side--front">
                <img src={project_p2} alt="Portfolio"></img>
              </div>
              <div className="file__side file__side--back file__side--back-1">
                <a href="https://jacksonmoji.tech/" className="btn btn--blue btn--animated"><FaExternalLinkAlt /></a>
                <a href="https://github.com/jacksonmoji/portfolio" className="btn btn--dark btn--animated"><FaGithub /> </a>
              </div>
            </div>
          </div>
          <div className="col-2-of-4">
          <h3 className="heading-tertiary u-margin-bottom-small">My Portfolio Site</h3>    
            <p className="paragraph"> 
            This is a project to demonstrate my frontend design skillset built to make a template for anyone who needs a design idea or needs a free portfolio template. The Web app is built using reactjs, sass, css, and containerised using docker.
            </p>
            <p className="skills__big">
              <FaJs /> <FaSass /> <FaReact /> <FaCss3 />
            </p>
          </div>
        </div>
      </section>

    );
  }
}

export default Portfolio;
