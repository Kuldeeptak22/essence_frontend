import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const PopupCategory = ({ category, clickedCategoryId, subCategoryData }) => {
  const navigate = useNavigate();

  const goToProductsPage = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div {...bindTrigger(popupState)} className="cursor-pointer">
            <span className="sm:font-semibold">{category}</span>
            <KeyboardArrowDownIcon />
          </div>
          <Menu {...bindMenu(popupState)}>
            {subCategoryData &&
              subCategoryData
                .filter((a) => a.category._id === clickedCategoryId)
                .map((item) => (
                  <span key={item._id} onClick={() => goToProductsPage(item._id)}>
                    <MenuItem onClick={popupState.close}>
                      {item.name}
                    </MenuItem>
                  </span>
                ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default PopupCategory;
