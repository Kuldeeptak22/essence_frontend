import axios from "axios";
import { ActionName } from "../../utils/nameSpace";
import { BaseURL } from "../../utils/nameSpace";
const { GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } =
  ActionName;

export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_PENDING });
    axios
      .get(`${BaseURL}/products/get_products`)
      .then((res) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res?.data?.data });
      })
      .catch((err) => {
        dispatch({ type: GET_PRODUCTS_FAILED, payload: err?.message });
      });
  };
};
