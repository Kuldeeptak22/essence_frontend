import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryBar from "../components/Category/CategoryBar";
import Carousel from "../components/Carousel/Carousel";
import CommonSlider from "../components/CommenSlider/CommonSlider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoryBar/categoryActions";
import { getSubCategories } from "../redux/subCategory/subCategoryAction";

const HomePage = () => {
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
  return (
    <Container fluid className="g-0">
      <Row className="g-0">
        <Col>
          <CategoryBar categoryData={categoryData} subCategoryData={subCategoryData}/>
        </Col>
      </Row>
      <Row className="g-0">
        <Col>
          <Carousel />
        </Col>
      </Row>
      <Row className="g-0">
        {categoryData &&
          categoryData.map((item) => (
            <CommonSlider categoryName={item.name} key={item._id} subCategoryData={subCategoryData}/>
          ))}
      </Row>
    </Container>
  );
};

export default HomePage;
