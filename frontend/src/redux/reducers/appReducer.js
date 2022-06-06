import {
  USER_REGISTER,
  OPEN_DESHBOARD_PAGE,
  SET_CART_ITEMS,
  EDIT_ORDER_LIMIT_MODAL,
  ADD_BANNER_MODAL,
  ADD_ORDER_LIMIT_DATA,
  ADD_PAGE_MODAL,
  ADD_ADDON_MODAL,
  ADD_CATEGORY_MODAL,
  ADD_FOOD_MODAL,
  ADD_SUBCATEGORY_MODAL,
} from "../constants/Constants";

const appData = {
  orderLimitData: [],
  cartItems: [],
};
const modals = {
  editOrderLimit: false,
  addBanner: false,
  addPageModal: false,
  addonModal: false,
  categoriesModal: false,
  subCategoriesModal: false,
  addFoodModal: false,
};
const appInitialState = {
  dashboardPage: false,
  user: {},
  ...appData,
  ...modals,
};

const appReducerFunction = (state = appInitialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state, user: action.payload };
    case EDIT_ORDER_LIMIT_MODAL:
      return { editOrderLimit: !state.editOrderLimit };
    case ADD_BANNER_MODAL:
      return { addBanner: !state.addBanner };
    case ADD_PAGE_MODAL:
      return { addPageModal: !state.addPageModal };

      case ADD_ADDON_MODAL:
        return { addonModal: !state.addonModal };


        case ADD_CATEGORY_MODAL:
          return { categoriesModal: !state.categoriesModal };

          case ADD_SUBCATEGORY_MODAL:
            return { subCategoriesModal: !state.subCategoriesModal };

            case ADD_FOOD_MODAL:
              return { addFoodModal: !state.addFoodModal };

    case OPEN_DESHBOARD_PAGE:
      return { dashboardPage: action.payload };



    case ADD_ORDER_LIMIT_DATA:
      return {
        ...state,
        orderLimitData: [action.payload],
      };
    case SET_CART_ITEMS:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default appReducerFunction;
