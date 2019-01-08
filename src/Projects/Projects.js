import React, { Component } from "react";
import "./Projects.css";

var anagramPic = require("../Images/anagram.png");
var proofPic = require("../Images/proof.png");

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { anagram: false, proof: true };
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
  };

  render() {
    let itemStyle;
    let itemLink;
    let itemDescription;

    if (this.state.anagram === true) {
      itemStyle = {
        backgroundImage: "url(" + anagramPic + ")"
      };
      itemLink = "";

      itemDescription =
        "This app takes text input, sends a fetch request to an API which returns its closest match to an anagram.";
    }
    if (this.state.proof === true) {
      itemStyle = {
        backgroundImage: "url(" + proofPic + ")"
      };
      itemLink = "";

      itemDescription =
        "This Webpage has been commissioned by Proof Technology LLC, an MSP providing IT and cyber security services";
    }

    return (
      <div className="projectMain">
        <div className="sidebar">
          <h3 className="projectH3">Projects</h3>
          <ul>
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
            <li>
              <button
                className="sideName"
                name="anagram"
                id="anagramButton"
                onClick={this.onClick}
              >
                Anagram Generator
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
