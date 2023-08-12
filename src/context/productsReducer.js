import { inventoryData } from "../data";

export const initialState = {
  productsList: inventoryData,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
