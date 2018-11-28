import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="navbarMain">
          <Navbar />
        </header>
        <div className="App-div">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
