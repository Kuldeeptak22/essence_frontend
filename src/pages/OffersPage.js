import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
        <Col className="font-bold text-2xl my-3" data-aos="zoom-in"> Exciting Offers</Col>
      </Row>
      <Row className="">
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
      <Row className="">
        <Col data-aos="zoom-in">
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default OffersPage;
