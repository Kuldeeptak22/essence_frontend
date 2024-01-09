import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../components/Category/CategoryBar";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CategoryBar />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
