import { ADD_CART, REMOVE_CART, CLEAR_CART } from '../actions/actionTypes';

const initialState = {
  cart: []
}

function cartReducer(state=initialState, action){
  let cart = [];

  switch(action.type){
    case ADD_CART:
      var newState = {...state};
      return{
        ...newState,
        cart: [...newState.cart, {order: action.order}]
      }
    case REMOVE_CART:
      console.log(cart);
      cart = state.cart.filter(val => val.id !== action.id);
      console.log(cart);
      return {...state, cart}
    case CLEAR_CART:
      cart = [];
      return {...state, cart}
    default:
      return state;
  }
}

export default cartReducer;
