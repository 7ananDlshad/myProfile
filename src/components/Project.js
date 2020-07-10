import React from "react";
import { Row, Col, Badge } from "react-bootstrap";

export default function Project() {
  return (
    <div className="container">
      <Row>
        <h1>LATEST PROJECTS</h1>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <img
            src={require("./images/todo.jpg")}
            alt="my pic"
            width="300px"
            height="250px"
            className="my-3 rounded shadow-lg"
          />
        </Col>

        <Col className="my-5">
          <Badge
            style={{
              backgroundColor: "#FFB6C1",
            }}
            className="p-3 "
          >
            Project | 01
          </Badge>
          <hr />
          <p>
            ​I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me and you can start
            adding your own content and make changes to the font. Feel free to
            drag and drop me anywhere you like on your page. I’m a great place
            for you to write more. Tell a story about yourself.
            <p>
              <a
                href="https://github.com/7ananDlshad/iq-bootcamp-todolist-students"
                style={{ color: "#FFB6C1" }}
              >
                ToDo List Project
              </a>
            </p>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <img
            src={require("./images/wallet.png")}
            alt="my pic"
            width="300px"
            height="250px"
            className="my-3 rounded"
          />
        </Col>

        <Col className="my-5">
          <Badge style={{ backgroundColor: "#FFB6C1" }} className="p-3">
            Project | 02
          </Badge>
          <hr />
          <p>
            ​I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me and you can start
            adding your own content and make changes to the font. Feel free to
            drag and drop me anywhere you like on your page. I’m a great place
            for you to write more. Tell a story about yourself.
            <p>
              <a
                href="https://github.com/QaysAyad/iq-bootcamp-wallet-project-students"
                style={{ color: "#FFB6C1" }}
              >
                Wallet Project
              </a>
            </p>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <img
            src={require("./images/movie.jpg")}
            alt="my pic"
            width="300px"
            height="250px"
            className="my-3 rounded"
          />
        </Col>

        <Col className="my-5">
          <Badge style={{ backgroundColor: "#FFB6C1" }} className="p-3">
            Project | 03
          </Badge>
          <hr />
          <p>
            ​I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me and you can start
            adding your own content and make changes to the font. Feel free to
            drag and drop me anywhere you like on your page. I’m a great place
            for you to write more. Tell a story about yourself.
            <p>
              <a
                href="https://github.com/QaysAyad/iraq-bc-movies-project-students"
                style={{ color: "#FFB6C1" }}
              >
                Movie Project
              </a>
            </p>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <img
            src={require("./images/resturante.jpg")}
            alt="my pic"
            width="300px"
            height="250px"
            className="my-3 rounded"
          />
        </Col>

        <Col className="my-5">
          <Badge style={{ backgroundColor: "#FFB6C1" }} className="p-3">
            Project | 04
          </Badge>
          <hr />
          <p>
            ​I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me and you can start
            adding your own content and make changes to the font. Feel free to
            drag and drop me anywhere you like on your page. I’m a great place
            for you to write more. Tell a story about yourself.
            <p>
              <a
                href="https://github.com/7ananDlshad/Super-Team"
                style={{ color: "#FFB6C1" }}
              >
                Resturant and Dishes Project
              </a>
            </p>
          </p>
        </Col>
      </Row>
    </div>
  );
}
