import { typesOwnProducts } from "../types/types";

const initialState = {
  propios: [],
};

export const ownProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesOwnProducts.register:
      return {
        propios: [action.payload],
      };
    case typesOwnProducts.read:
      return {
        propios: [...action.payload],
      };
    case typesOwnProducts.edit:
      return {
        propios: [...action.payload],
      };
    case typesOwnProducts.delete:
      return {
        propios: state.propios.filter((emp) => emp.nombre !== action.payload),
      };
    default:
      return state;
  }
};
