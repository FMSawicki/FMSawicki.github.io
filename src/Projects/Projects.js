import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projectMain">
        <h2 className="projectHeader">My Projects</h2>

        <div className="mainItem">
          <ul>
            <li>
              <h4 className="subHeader">Anagram Generator</h4>
              <p className="projectText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Nam luctus turpis vitae nisl pretium congue. Maecenas
                congue felis eu lacus condimentum vehicula.{" "}
              </p>
            </li>
          </ul>
        </div>
        <div className="divider" />
      </div>
    );
  }
}
export default Projects;
