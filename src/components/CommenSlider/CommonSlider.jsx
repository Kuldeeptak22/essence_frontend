import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import CommonCard from "../CommonCard/CommonCard";

const CommonSlider = ({categoryName}) => {
  const [isLoading, setIsLoading] = useState(true);

  const subCategoryData = useSelector(
    (state) => state?.subCategory?.subCategories?.data
  );

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container
      fluid
      className="d-flex justify-center flex-col align-middle items-center bg-slate-200"
    >
      <Row className="w-[97%]">
        <div className="flex p-4 font-bold text-xl sm:text-center">
          {categoryName}
        </div>
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

        <Slider {...settings}>
          {subCategoryData &&
            subCategoryData
              .filter((a) => a.category.name === categoryName)
              .map((elem) => <CommonCard elem={elem} key={elem._id} />)}
        </Slider>
      </Row>
    </Container>
  );
};

export default CommonSlider;
