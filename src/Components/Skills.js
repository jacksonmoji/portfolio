import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws,faAngular,faJs,faPython,faCss3,faHtml5,
         faReact,faLinux,faGithub,faLaravel,
         faMagento,
         faPhp,
         faJava,
         faAtlassian,
         faGitAlt,
         faNpm,
         faYarn,
         faNode,
         faBootstrap,
         faSlack
} from "@fortawesome/free-brands-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"> <FontAwesomeIcon icon={faJs} color="#f8e320`" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faPython} /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faCss3} color="#2895ce" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faHtml5} color="#e34c26" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faPhp} color="#5467b6" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faJava} color="#e7a7a0" /></li>

          </ul>
          
          <div className="subheading mb-3">Frameworks/Libraries</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"> <FontAwesomeIcon icon={faAngular} color="#c30e2e" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faBootstrap} color="#563d7c" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faReact} color="#00d8ff" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faLaravel} color="#f05340" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faMagento} color="#f26322" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faNode} color="#659e5a" /></li>
          </ul>

          <div className="subheading mb-3">Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"> <FontAwesomeIcon icon={faGitAlt} color="#f05033" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faGithub} color="#323131" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faNpm} color="#cb3837" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faAtlassian} color="#2684ff" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faLinux} /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faYarn} color="#4c95f1" /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faSlack} /></li>
            <li className="list-inline-item"> <FontAwesomeIcon icon={faAws} color="#f68d11" /></li>
          </ul>

        </div>
      </section>
    );
  }
}

export default Skills;