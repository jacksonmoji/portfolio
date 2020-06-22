import React, { Component } from 'react';


class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="section-education" id="education">
        <div className="u-center-text u-margin-bottom-big--about">
          <h1 className="heading-secondary">
           Education
          </h1>    
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h2>UNIVERSITY OF CAPE TOWN</h2>
            <h3 className="heading-tertiary u-margin-bottom-small"> MSC COMPUTER SCIENCE </h3>  
            <p> - </p>    
            <p> Busy with Dissertation </p>          

          </div>

          <div className="col-1-of-2">
            <h2>UNIVERSITY OF SUNDERLAND</h2>
            <h3 className="heading-tertiary u-margin-bottom-small"> BSc (Hons) COMPUTER SYSTEMS ENGINEERING </h3>  
            <p> 2:1 </p>    
            <p> 09/2011 - 07/2015 </p>          
          </div>
  
        </div>
      </section>
    );
  }
}

export default Education;