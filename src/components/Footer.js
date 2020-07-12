import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.css";
import {
  faPhoneAlt,
  faEnvelope,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <Row align="middle" className="main-footer" style={{ color: "white" }}>
      <Col lg={3}>
        <Row className="d-flex justify-content-center">
          <Col lg={3}>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              style={{
                fontSize: "50px",
                marginTop: "40px",
              }}
            />
          </Col>
          <Col style={{ marginTop: "20px" }} lg={4}>
            <h5>Call</h5>
            <p> 07814012087</p>
          </Col>
        </Row>
      </Col>

      <Col lg={6}>
        <Row className="d-flex justify-content-center">
          <Col lg={2}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                fontSize: "50px",
                marginTop: "40px",
              }}
            />
          </Col>
          <Col style={{ marginTop: "20px" }} lg={4}>
            <h5>Contact</h5>
            <p>ensw03217@student.su.ed.krd</p>
            <p>7ananDlshad@gmail.com</p>
          </Col>
        </Row>
      </Col>

      <Col lg={3}>
        <Row className="d-flex justify-content-center">
          <Col lg={3}>
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                fontSize: "50px",
                marginTop: "40px",
              }}
            />
          </Col>
          <Col style={{ marginTop: "20px" }} lg={5}>
            <h5>Follow me</h5>
            <a href="https://www.facebook.com/7anan.engineer">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{
                  marginRight: "10px",
                  fontSize: "25px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://twitter.com/7ananTaha">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  marginRight: "10px",
                  fontSize: "25px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://github.com/7ananDlshad">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: "25px", color: "white" }}
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
