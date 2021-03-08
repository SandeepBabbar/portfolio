import React from 'react'
import './App.css';
import Image from './assets/self.jpg'
import Branding from './assets/branding.PNG'
import Clock from './assets/clock.PNG'
import Testimonials from './assets/Testimonials.PNG'

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <div className="header">
          <img className="image" src={Image}/>
          <div className="intro">
            <h1>Sandeep Singh Babbar</h1>
            <p>Web Developer | Information Security Student</p>
            <p>
              <a style={{marginRight: 10}} target="_blank" href="/files/babbar_sandeep_resume.pdf">View Resume</a>|
              <a style={{marginLeft: 10}} target="_blank" href="https://www.linkedin.com/in/sandeepsinghbabbar/">LinkedIn</a>
            </p>
            <div className="desc">
              <p>
                Information security student with 1.5+ years of experience as frontend web developer in developing scalable and secure web applications. Adept in transforming design templates into responsive websites with pixel perfect precision and managing cloud-based deployments.
              </p>
            </div>
            <div className="projects">
              <p>PROJECTS</p>
            </div>
            <div className="screenshots" style={{marginTop:"40px"}}>
                <div className="container" style={{position:"relative", marginRight:20}}>
                    <div className="links">
                      <a target="_blank" href="/projects/branding/index.html"><i className="fa fa-external-link fa-2x"></i></a>
                      <a target="_blank" href="https://github.com/SandeepBabbar/portfolio-branding"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                      <div className="imgContaienr" style={{position:"relative"}}>
                      <img src={Branding}/>
                      </div>
                  </div>
                    <div className="container" style={{position:"relative", marginRight:20}}>
                    <div className="links">
                    <a target="_blank" href="/projects/testimonials/index.html"><i className="fa fa-external-link fa-2x"></i></a>
                    <a target="_blank" href="https://github.com/SandeepBabbar/portfolio-testimonials"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                    <div className="imgContaienr" style={{position:"relative"}}>
                      <img src={Testimonials}/>
                      </div>
                    </div>
                    <div  className="container" style={{position:"relative", marginRight:20}}>
                    <div className="links">
                    <a target="_blank" href="/projects/clock/index.html"><i className="fa fa-external-link fa-2x"></i></a>
                    <a target="_blank" href="https://github.com/SandeepBabbar/portfolio-clock"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                    <div className="imgContaienr" style={{position:"relative"}}>
                      <img src={Clock}/>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default App;
