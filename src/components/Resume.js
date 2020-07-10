import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { faLightbulb, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  return (
    <div className="container">
      <Row>
        <h1>RESUME</h1>
      </Row>

      <Row>
        <Col lg={8}>
          <hr />
          <Row>
            <Col>
              <Badge className="p-3" style={{ backgroundColor: "#FFB6C1" }}>
                Professional ​ info​​
              </Badge>
              <p>
                ​I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Badge className="p-3" style={{ backgroundColor: "#FFB6C1" }}>
                Work​ experience​
              </Badge>
              <h3>Job position. Click to edit ​2010 - present</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me and you can
                start adding your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page. I’m a
                great place for you to write more. Tell a story about yourself.
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Badge className="p-3" style={{ backgroundColor: "#FFB6C1" }}>
                Education
              </Badge>
              <h3>Salahadin University/Erbil</h3>
              <p>
                I'm a senior student at Salahadin University college of
                Engineering Software and informatics Engineering Department.
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="my-5">
          <Col className="mb-5">
            <h4>
              <FontAwesomeIcon
                icon={faLightbulb}
                style={{
                  marginRight: "10px",
                  fontSize: "25px",
                  color: "#FFB6C1",
                }}
              />
              Skills
            </h4>
            <hr />
            <p>React(Library)</p>
          </Col>
          <Col>
            <h4>
              <FontAwesomeIcon
                icon={faGlobe}
                style={{
                  marginRight: "10px",
                  fontSize: "25px",
                  color: "#FFB6C1",
                }}
              />
              Language
            </h4>
            <hr />
            <p>JavaScript</p>
            <p>HTML/CSS</p>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
