import {
  CLEAR_ERROR,
  GET_ALL_FOODITEM_FAIL,
  GET_ALL_FOODITEM_REQUEST,
  GET_ALL_FOODITEM_SUCESS,
} from "../constants/foodItemConstant";

export const foodItemReducerFunction = (state = { foodData: [] }, action) => {
  switch (action.type) {
    case GET_ALL_FOODITEM_REQUEST:
      return { loading: true, foodData: [] };

    case GET_ALL_FOODITEM_SUCESS:
      return {
        loading: false,
        foodData: action.payload.food,
      };

    case GET_ALL_FOODITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
