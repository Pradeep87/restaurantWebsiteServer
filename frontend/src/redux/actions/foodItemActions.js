import axios from "axios";
import {
  GET_ALL_FOODITEM_REQUEST,
  GET_ALL_FOODITEM_SUCESS,
  GET_ALL_FOODITEM_FAIL,
  CLEAR_ERROR,
} from "../constants/foodItemConstant";

export const getAllFood = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_FOODITEM_REQUEST });
    const { data } = await axios.get("/api/admin/fooditem");

    dispatch({ type: GET_ALL_FOODITEM_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_FOODITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
