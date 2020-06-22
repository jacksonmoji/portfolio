import React, { Component } from 'react';
// import Loader from "./Components/Loader";
import About from './Components/About';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Awards from './Components/Awards';
import Footer from './Components/Footer';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      portfolio : profileData.portfolio,
      awards : profileData.awards
    }
  }
  // sleep = milliseconds => {
  //   return new Promise(resolve => setTimeout(resolve, milliseconds));
  // };
  // wait = async (milliseconds = 2000) => {
  //   await this.sleep(milliseconds);
  //   this.setState({
  //     loading: false
  //   });
  // };

  // componentDidMount() {
  //   this.wait(2000);
  //   // this.fetchGitHub();
  // }

  render() {
    // if (this.state.loading) return<Loader/>
    
    return (
      <div className="App">
        <Navigation NavigationData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Portfolio portfolio={this.state.portfolio} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
        </div>
      </div>
    );
  }
}

export default App;