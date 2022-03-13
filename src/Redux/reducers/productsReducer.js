import { typesProducts } from "../types/types";

const initialState = {
  products: [],
  search: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.register:
      return {
        products: [action.payload],
      };
    case typesProducts.list:
      return {
        products: [...action.payload],
      };
    case typesProducts.search:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};
