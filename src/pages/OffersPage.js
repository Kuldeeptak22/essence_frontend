import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoryBar/categoryActions";
import CommonSlider from "../components/CommenSlider/CommonSlider";
import Carousel from "../components/Carousel/Carousel";
import { getSubCategories } from "../redux/subCategory/subCategoryAction";

const OffersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
  }, [dispatch]);

  const categoryData = useSelector(
    (state) => state?.category?.categories?.data
  );
  const subCategoryData = useSelector(
    (state) => state?.subCategory?.subCategories?.data
  );
  const topic = "offers";
  return (
    <Container fluid>
      <Row>
        <Col className="font-bold text-2xl my-3"> Exciting Offers</Col>
      </Row>
      <Row className="g-0">
        {categoryData &&
          categoryData?.map((item) => (
            <CommonSlider
              categoryName={item?.name}
              topic={topic}
              subCategoryData={subCategoryData}
              key={item._id}
            />
          ))}
      </Row>
      <Row className="g-0">
        <Col>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default OffersPage;
