
const initialState = {
    cartItems: [], // Initial state for the cart items
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Logic to add item to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        // Logic to remove item from the cart
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
      // Add more cases for other cart-related actions
      default:
        return state;
    }
  };
  
  export default cartReducer;
  