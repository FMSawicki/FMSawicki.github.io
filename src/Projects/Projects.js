import React, { Component } from "react";
// import Proof from "./Subcomponents/Proof";
// import Anagram from "./Subcomponents/Anagram";

import "./Projects.css";

var homePic = require("../Images/cabin.jpg");
var anagramPic = require("../Images/tree.jpeg");
var proofPic = require("../Images/proofContact.png");

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { anagram: false, proof: false, home: true };
  }
  onClick = e => {
    console.log([e.target.name]);
    if (e.target.name !== "anagram") {
      this.setState({ anagram: false });
    } else {
      this.setState({
        anagram: true
      });
    }
    if (e.target.name !== "proof") {
      this.setState({ proof: false });
    } else {
      this.setState({
        proof: true
      });
    }
    if (e.target.name !== "home") {
      this.setState({ home: false });
    } else {
      this.setState({
        home: true
      });
    }
  };

  render() {
    let itemStyle;
    let linkStyle;
    let itemLink;
    let itemDescription;

    if (this.state.home === true) {
      itemStyle = {
        backgroundImage: "url(" + homePic + ")"
      };
      console.log(homePic);
    }
    if (this.state.anagram === true) {
      itemStyle = {
        backgroundImage: "url(" + anagramPic + ")"
      };
      // linkStyle = {
      //   color: "#c99e76"
      // };
      itemLink = "";

      itemDescription =
        "This app takes text input, sends a fetch request to an API which returns it's closest match to an anagram.";
    } else {
      // linkStyle = {
      //   color: "white"
      // };
    }
    if (this.state.proof === true) {
      itemStyle = {
        backgroundImage: "url(" + proofPic + ")"
      };
      itemLink = "";

      // linkStyle = {
      //   color: "#c99e76"
      // };
      itemDescription =
        "This Webpage has been commissioned by Proof Technology LLC, an MSP providing IT services";
    } else {
      // linkStyle = {
      //   color: "white"
      // };
    }

    return (
      <div className="projectMain">
        <div className="sidebar">
          <button className="projectButton" name="home" onClick={this.onClick}>
            My Projects
          </button>
          <ul>
            <li>
              <button
                className="sideName"
                name="anagram"
                id="anagramButton"
                onClick={this.onClick}
                style={linkStyle}
              >
                Anagram Generator
              </button>
            </li>
            <li>
              <button
                className="sideName"
                name="proof"
                id="proofButton"
                onClick={this.onClick}
              >
                Proof Technology Webpage
              </button>
            </li>
          </ul>
        </div>
        <div className="mainItem">
          <a href={itemLink} className="itemImage grow" style={itemStyle} />
          <p className="projectText">{itemDescription}</p>
        </div>
      </div>
    );
  }
}
export default Projects;
