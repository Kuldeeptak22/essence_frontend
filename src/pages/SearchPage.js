import { Container, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchItems } from "../redux/Search/searchAction";

const SearchPage = () => {
  const data = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const searchData = useSelector((state) => state?.search?.searchItems?.data);

  useEffect(() => {
    if (data.search <= 0) {
      navigate("/");
    }
    dispatch(getSearchItems(data.search));
    setIsLoading(false);
  }, [data.search, dispatch, navigate]);

  return (
    <Container>
      <Row>
        <p className="fs-2 pt-5 pb-3 font-bold" data-aos="zoom-in">Result</p>
        {isLoading && (
          <div className="d-flex">
            <Skeleton
              variant="rectangle"
              animation="wave"
              height={220}
              width={400}
            />
          </div>
        )}
        {searchData &&
          searchData.map((elem) => (
            <Col sm={3} key={elem._id} data-aos="zoom-in">
              <ProductCard elem={elem} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
