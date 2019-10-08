import * as types from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      let newItem = state.items.find(
        item =>
          item.drink === action.payload.drink &&
          item.option === action.payload.option
      );
      if (newItem) {
        newItem.quantity += 1;
        return {
          ...state,
          items: [...state.items]
        };
      }
      newItem = action.payload;
      newItem.quantity = 1;
      return {
        ...state,
        items: [newItem].concat(state.items)
      };
    case types.CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
