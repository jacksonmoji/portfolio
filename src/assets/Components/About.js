import React, { Component } from 'react';
import pro_pic_1 from '../img/profile-pic3.png';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

class About extends Component {
  constructor(props) {
    super(props);

    this.about = props.about;
  }

  render() {
    return(
        <section className="section-about" id="about">
            <div className="u-center-text u-margin-bottom-big--about">
                <h2 className="heading-secondary">
                About
                </h2>    
            </div>

            <div className="row">

            <div className="col-1-of-2">
                <div className="composition">
            
                <img className="composition__photo composition__photo--p1" src={pro_pic_1} alt="profile"/>  
                
                </div>
                <div className="composition__social">
                    <ul className="composition composition_list">
                    <li className="composition__item"><a href="https://linkedin.com/in/jackson-thapelo-moji-5515167a" className="composition__link"><FaLinkedin /></a></li>
                    <li className="composition__item"><a href="mailto:jacksonmoji@gmail.com" className="composition__link"><FaEnvelope /></a></li>
                    <li className="composition__item"><a href="https://twitter.com/jacksonmoji" className="composition__link"><FaTwitter /></a></li>
                    <li className="composition__item"><a href="https://github.com/jacksonmoji" className="composition__link"><FaGithub /></a></li>
                    </ul>
                </div>
            </div>

            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Jackson Thapelo Moji</h3>    
                <p className="paragraph">
                I remember back when I was a little kid, I used to play with my neighbour's computer trying to make beats with FL Studio. I was horrible at beat making sadly, despite my skills, I was always curious about the inner workings of the software. Over the years my curiosity for Software and the Internet grew, leading to me taking computer classes in high school learning the architecture of computer motherboards and network topology. It wasn't till my undergrad years that I started learning how to write code in Java. I still remember sitting in front of a work station in the computer lab with the terminal open and making it print 'Hello, Jackson' for the very first time. As I went through the Java tutorial, it was almost magic, being able to get the computer to do whatever I wanted, just by typing in these funny little symbols, limited only by my own imagination and ingenuity. 
                </p>
                <p className="paragraph">
                Throughout my university years, I latched on to any ideas for projects I could get, moving from 'Hello World' all the way to a simple Morabaraba Game (African Traditional Board Game), with dozens of projects in between. I learned C#, then JavaScript, tearing through any book, course material, article, and YouTube video I could find on anything remotely related to software development. I was absolutely hooked!
                </p>
                <p className="paragraph">
                This passion led me to take on postgraduate studies at the University of Cape Town. Here there are more resources available to me than I ever could have imagined as a kid. I have been studying new languages, more algorithms, computer science research, all with pretty much the same fascination that drove me as a kid. And it is here that I learned truly how much there is yet to learn. 
                </p>
                <p className="paragraph">
                This passion remains with me in the Industry, in light of this, I have been building hands-on experience spanning 3+ years developing software for various companies offering services to clients in Health staffing and recruiting, Insurance, and Commerce. Always eager to learn new Technologies and find interesting ways of solving problems. There's certainly yet more to learn, yet more problems to solve, and yet more to build. And for this, I am very grateful.
                </p>

                {/* <a href="#" className="btn-text">Learn more &rarr;</a> */}
            </div>
            </div>

        </section>

    );
  }
}

export default About;
  