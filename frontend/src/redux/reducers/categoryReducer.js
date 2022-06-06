import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  CLEAR_ERROR,
} from "../constants/categoryConstant";

export const categoryReducerFunction = (
  state = { categoryData: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return { loading: true, categoryData: [] };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categoryData: action.payload.category,
      };

    case GET_ALL_CATEGORY_FAIL:
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
