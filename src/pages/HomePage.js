import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../components/Category/CategoryBar";

const HomePage = () => {
  return (
    <Container fluid className="g-0">
      <Row className="g-0">
        <Col>
          <CategoryBar />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
