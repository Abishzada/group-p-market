import { POST_ADDED, POST_REMOVED } from "../actions/ActionTypes/index";

const initialState = {
  basket: [],
  count: 0,
  isProductExists: false,
};

const addCarts = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case POST_ADDED:
      const bag = [...state.basket];
      const _addedProduct = action.payload;
      const _isProductExists = state.basket?.some(
        (v) => _addedProduct.id === v.id
      );
      console.log(_isProductExists);
      if (!_isProductExists) {
        bag.push(action.payload);

        state.basket = [...bag];
        state.count = ++state.count;
        return state;
      } else {
        state.isProductExists = _isProductExists;
        alert("mehsul movcuddur");
      }
    //   console.log(action.payload);

    // return [
    //     ...bag;
    //     action.payload
    // ];
    // return [

    // //   ...state,
    // //   action.payload

    // ];

    case POST_REMOVED:
      return (state = state.filter((x) => x.id !== action.payload.id));

    default:
      return state;
  }
};

export default addCarts;
