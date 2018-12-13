import React, { Component } from "react";
import "./About.css";
import Headshot from "../Images/headshot.jpg";
class About extends Component {
  render() {
    return (
      <div className="aboutMain">
        <div className="aboutWrapper">
          <img src={Headshot} alt="headshot" id="headshot" />

          <div className="textWrapper">
            <p className="aboutText">
              I'm a full-stack web developer and veteran looking to join a
              people-oriented team that strives to make an impact on the world.
              My background in both military service and non-profit work has
              made me passionate about affecting real change for the world, as
              well as working in driven, goal-oriented workplaces where the
              outcome improves people's lives
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
