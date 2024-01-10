import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategories } from "../../redux/subCategory/subCategoryAction";

const PopupCategory = ({ category,clickedCategory }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSubCategories());
  }, []);

  const subCategoryData = useSelector(
    (state) => state?.subCategory?.subCategories?.data
  );

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div
            {...bindTrigger(popupState)}
            className="cursor-pointer"
          >
            <span className="sm:font-semibold">{category}</span>
            <KeyboardArrowDownIcon />
          </div>
          <Menu {...bindMenu(popupState)}>
            {subCategoryData &&
              subCategoryData
                .filter((a) => a.category.name === clickedCategory)
                .map((item) => (
                  <MenuItem key={item._id} onClick={popupState.close}>
                    {item.name}
                  </MenuItem>
                ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default PopupCategory;
