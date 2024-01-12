import React, { useEffect, useState } from "react";
import { Card, CardActionArea, Skeleton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { BaseURL } from "../../utils/nameSpace";
import { useNavigate } from "react-router-dom";

const CommonCard = ({ elem }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const navigate = useNavigate();

  //   const goToTvShowDetailsPage = (id) => {
  //     navigate(`/tvShows/tvShowDetails/${id}`);
  //   };
  useEffect(() => {
    setIsLoading(true);
  }, [elem]);

  return (
    <>
      {isLoading ? (
        <Card
          sx={{ maxWidth: 400, margin: "5px" }}
          key={elem?.title}
          // onClick={() => goToTvShowDetailsPage(elem?._id)}
        >
          <CardActionArea>
            <CardMedia
              style={{ maxHeight: 440 }}
              // className="max-h-72"
              component="img"
              height="100%"
              width="100px"
              image={`${BaseURL}/uploads/subCategories/${elem?.image}`}
              alt={elem?.name}
            />
            <CardContent>
              <Typography gutterBottom component="div">
                {elem?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                from 299/-
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <Skeleton
          variant="rectangular"
          width={226}
          height={300}
        />
      )}
    </>
  );
};

export default CommonCard;
