import React, { Component } from "react";
import "./About.css";
import Headshot from "../Images/headshot.jpg";
class About extends Component {
  render() {
    return (
      <div className="aboutMain">
        <img src={Headshot} alt="headshot" id="headshot" />

        <div className="textWrapper">
          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
            eu lacus condimentum vehicula.
          </p>

          <p className="aboutText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
            eu lacus condimentum vehicula.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
