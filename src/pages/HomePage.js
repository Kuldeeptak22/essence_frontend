import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../components/Category/CategoryBar";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <Container fluid className="g-0">
      <Row className="g-0">
        <Col>
          <CategoryBar />
        </Col>
      </Row>
      <Row className="g-0">
        <Col>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
