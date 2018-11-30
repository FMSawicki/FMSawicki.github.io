import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="body">
        <div className="landingText">
          <h2 className="landingHead">
            Web Development by <br /> Felix Sawicki
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            laoreet pharetra arcu at suscipit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Nam luctus turpis vitae nisl pretium congue. Maecenas congue felis
            eu lacus condimentum vehicula. Phasellus egestas lobortis tellus
            quis vehicula. Nulla at condimentum sem.
          </p>
        </div>
      </div>
    );
  }
}
export default Landing;
