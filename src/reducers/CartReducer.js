const initialState = {
  carts: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { cartReducer, initialState };
