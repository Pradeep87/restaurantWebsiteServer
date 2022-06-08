import axios from "axios";
import {
  CLEAR_ERROR,
    GET_SUBCATEGORY_FAIL,
  GET_SUBCATEGORY_REQUEST,
  GET_SUBCATEGORY_SUCCESS,
} from "../constants/subCategoryConstant";

export const getSubCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SUBCATEGORY_REQUEST,
    });
    const { data } = await axios.get("/api/admin/subcategory");
    dispatch({
      type: GET_SUBCATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SUBCATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
