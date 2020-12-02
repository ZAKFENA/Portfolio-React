import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from './pages/About';
// import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header'


function App() {
  return (
    <Router>
<main>
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/projects" component={Projects} />

    </main>
      </Router>
  );  
}

export default App;
