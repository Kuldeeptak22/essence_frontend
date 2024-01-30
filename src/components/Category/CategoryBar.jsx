import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PopupCategory from "./PopupCategory";

const CategoryBar = ({categoryData, subCategoryData}) => {
  const [categoryDetails, setCategoryDetails] = useState("");

  const clickCategory = (clickedCategoryId) => {
    setCategoryDetails(clickedCategoryId);
  };
  return (
    <Container fluid className="g-0">
      <Row className="bg-red-400 g-0 py-4">
        {categoryData &&
          categoryData.map((category) => (
            <Col
              className="px-1"
              key={category._id}
              onClick={() => clickCategory(category?._id)}
            >
              <PopupCategory
                category={category?.name}
                clickedCategoryId={categoryDetails}
                subCategoryData={subCategoryData}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CategoryBar;
