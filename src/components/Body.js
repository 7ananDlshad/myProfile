import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Body() {
  return (
    <>
      <Row>
        <Col lg={4}>
          <img
            src={require("../images/myPic.jpg")}
            alt="my pic"
            className="rounded w-75 mb-5 ml-5"
          />
        </Col>
        <Col lg={6} className="my-5 mx-5">
          <h1>Hello,</h1>
          <h3>A bit about me:</h3>
          <p style={{ overflowY: "hidden" }}>
            My name is Hanan i'm 20 years old and i live in Erbil. i'm a senior
            student at Salahadin University college of Engineering Software and
            informatics Engineering Department. i love coding i spend hours
            writting codes. i started my journey as an apprentice web developer
            at recoded organization it was so helpfull and helped me alot to be
            creative in my life.when i'm not coding i spend my time with my
            family and friends making memories.
          </p>
        </Col>
      </Row>
    </>
  );
}
