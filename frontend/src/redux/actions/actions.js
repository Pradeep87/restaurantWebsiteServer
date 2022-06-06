import { USER_REGISTER, SET_CART_ITEMS,ADD_ORDER_LIMIT_DATA } from "../constants/Constants";

export const userLogin = (input) => {
  return { type: USER_REGISTER, payload: input };
};

export const setCartItem = (items) => {
  return { type: SET_CART_ITEMS, payload: items };
};

export const addOrderLimit = (data) => {
  return { type: ADD_ORDER_LIMIT_DATA, payload: data };
};

