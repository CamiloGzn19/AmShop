import { typesProducts } from "../types/types";

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case typesProducts.filter:
      return {
        filter: action.payload,
      };
    default:
      return state;
  }
};
