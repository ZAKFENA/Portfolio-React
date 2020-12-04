import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import projects from "./projects.json";
import Card from "./components/ProjectCard";
import Resume from "./pages/Resume";
import Project from "./pages/Projects";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Project} />
      </div>
    </Router>
  );
}

export default App;
