import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./component.css";

export default function Navbar1() {
  return (
    <>
      <Navbar bg="#fffaf0" expand="lg" className="p-4">
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          Hanan Dlshad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: "75%" }}>
            <Link to="/" className="navbarLink">
              HOME
            </Link>
            <Link to="/resume" className="navbarLink">
              RESUME
            </Link>
            <Link to="/projects" className="navbarLink">
              PROJECTS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
