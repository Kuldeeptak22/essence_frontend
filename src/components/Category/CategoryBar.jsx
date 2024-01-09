import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getCategories } from "../../redux/categoryBar/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import { BaseURL } from "../../utils/nameSpace";
import PopupCategory from "./PopupCategory";

const CategoryBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoryData = useSelector(
    (state) => state?.category?.categories?.data
  );
  console.log("categoryData", categoryData);
  return (
    <Container fluid className="g-0">
      <Row className="bg-red-400 g-0 py-4">
        {categoryData &&
          categoryData.map((category) => (
            <Col
              className="px-1"
              key={category._id}
            >
              <PopupCategory category={category?.name} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CategoryBar;
