import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return( 
      <section className="section-experience" id="experience">
        <div className="u-center-text u-margin-bottom-big--about">
          <h2 className="heading-secondary">
           Experience
          </h2>    
        </div>
        <div class="row timeline">
          <div class="timeline__container timeline__container--left">
            <div class="content">
              <h1>A24 GROUP</h1>
              <h2>SOFWARE ENGINEER</h2>
              <h3>10/2019 - Present</h3>
              <p className="paragraph">Working on a legacy enterprise system for recruitment processes in the health industry. We are currently maintaining the a24group enterprise system which will be phased out over-time implementing new and up to date technologies using Node.js, React.js, and MongoDB from PHP and relational databases (MySQL, MSSQL ).</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>THOUGHT EXPRESS</h1>
              <h2>SOFWARE ENGINEER | BUSINESS PROCESS ENGINEER</h2>
              <h3>01/2019 - 11/2019</h3>
              <p className="paragraph">Successfully finished leading data migration/conversion from client's Oracle DBMS to Thought Express's System. Delivering the milestones before the deadlines. We believe in under-promising and over-delivering. Below are the activities performed in my role: Lead the business requirements analysis, design, development and quality assurance of technical/business solutions. Reviewed and re-designed existing processes to provide faster and more effective solutions. Engaged with clients in understanding the particular business needs/problems they needed to solve in relation to their business processes. Combined analytical thinking with process understanding to meet and solve problems. Collaborated internally with the project team to design and build the proposed business process solution. Worked individually towards my own deadlines while simultaneously engaging with the team in achieving collective goals and deadlines.</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--left">
            <div class="content">
              <h1>SQLI</h1>
              <h2>WEB DEVELOPER</h2>
              <h3>06/2018 - 01/2019</h3>
              <p className="paragraph">Developed extensions and applications in PHP Developed integrations from 3rd party systems into our systems Performed code reviews and design reviews from team members Provided input regarding new web technologies Performed Troubleshooting and fixed problems Reviewed and participated in testing Worked with customer service to correct issues identified by users</p>
            </div>
          </div>
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>OPEN SOFTWARE</h1>
              <h2>JUNIOR WEB DEVELOPER</h2>
              <h3>06/2015 - 03/2017</h3>
              <p className="paragraph">Successfully finished leading data migration/conversion from client's Oracle DBMS to Thought Express's System. Delivering the milestones before the deadlines. We believe in under-promising and over-delivering. Below are the activities performed in my role: Lead the business requirements analysis, design, development and quality assurance of technical/business solutions. Reviewed and re-designed existing processes to provide faster and more effective solutions. Engaged with clients in understanding the particular business needs/problems they needed to solve in relation to their business processes. Combined analytical thinking with process understanding to meet and solve problems. Collaborated internally with the project team to design and build the proposed business process solution. Worked individually towards my own deadlines while simultaneously engaging with the team in achieving collective goals and deadlines.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;