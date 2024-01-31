import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PopupCategory from "./PopupCategory";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import './CategoryBar.scss'
import { BaseURL } from "../../utils/nameSpace";

const CategoryBar = ({ categoryData, subCategoryData }) => {
  const navigate = useNavigate();
  const [categoryDetails, setCategoryDetails] = useState("");

  const clickCategory = (clickedCategoryId) => {
    setCategoryDetails(clickedCategoryId);
  };
  const clickMobileCategory = (clickedCategoryName) => {
    navigate(`/viewall/${clickedCategoryName}`);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categoryData &&
          categoryData.map((text, index) => (
            <ListItem key={text._id} disablePadding className="hover:bg-slate-700 hover:text-white" >
              <ListItemButton onClick={() => clickMobileCategory(text?.name)}>
                <img className="h-9 rounded-5 mx-2" src={`${BaseURL}/uploads/categories/${text?.image}`} alt={text?.name} />
                <ListItemText
                  primary={text?.name}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <Container fluid className="g-0 bg-red-400">
      <Row className="bg-red-400 g-0 py-4 category-bar" >
        {categoryData &&
          categoryData.map((category) => (
            <Col
              className="px-1 category-col"
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
      <Row className="g-0 mobileDrawer d-md-none">
        {["Categories"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} className="d-flex fw-bold text-white" style={{width:"114px"}}>
              {anchor}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryBar;
