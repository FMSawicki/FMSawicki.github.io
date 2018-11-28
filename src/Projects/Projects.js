import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="mainCom">
        <h2 className="subHeader">My Projects</h2>
        <ul>
          <li className="mainItem">
            <h4 className="subHeader">Migration to cloud</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
              eu lacus condimentum vehicula.{" "}
            </p>
          </li>
          <div className="divider" />
        </ul>
      </div>
    );
  }
}
export default Projects;
