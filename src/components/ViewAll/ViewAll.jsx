import React, { useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubCategories } from "../../redux/subCategory/subCategoryAction";
import CommonCard from "../CommonCard/CommonCard";

const ViewAll = () => {
  const categoryName = useParams();
  const dispatch = useDispatch();

  const subCategoryData = useSelector(
    (state) => state?.subCategory?.subCategories?.data
  );

  useEffect(() => {
    dispatch(getSubCategories());
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Row>
        <p className="my-4 font-bold text-2xl">{`${categoryName?.categoryName} Items`}</p>
        {subCategoryData &&
          subCategoryData
            .filter((a) => a.category.name === categoryName?.categoryName)
            .map((item) => (
              <Col>
                <CommonCard elem={item} key={item._id} />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default ViewAll;