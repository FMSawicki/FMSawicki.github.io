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
            Veteran || Full-Stack Developer || Volunteer
          </p>
        </div>
      </div>
    );
  }
}
export default Landing;
