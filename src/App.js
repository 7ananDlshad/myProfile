import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />

          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Project} />
          <Route path="/" exact component={Body} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
