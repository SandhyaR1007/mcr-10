import { inventoryData } from "../data";

export const initialState = {
  productsList: inventoryData,
  filters: {
    department: "All Departments",
    isLowStock: false,
    sortBy: "",
  },
};

export const actionTypes = {
  FILTER_BY_DEPARTMENT: "FILTER_BY_DEPARTMENT",
  FILTER_BY_STOCK: "FILTER_BY_STOCK",
  SORT: "SORT",
  ADD_NEW_PRODUCT: "ADD_NEW_PRODUCT",
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FILTER_BY_DEPARTMENT:
      return {
        ...state,
        filters: { ...state.filters, department: action.payload },
      };
    case actionTypes.FILTER_BY_STOCK:
      return {
        ...state,
        filters: { ...state.filters, isLowStock: action.payload },
      };
    case actionTypes.SORT:
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload },
      };
    case actionTypes.ADD_NEW_PRODUCT:
      return {
        ...state,
        productsList: action.payload,
      };
    default:
      return { ...state };
  }
};
