// reducers/index.js
import { combineReducers } from 'redux';
// Import your reducers here
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  cart: cartReducer,
});

export default rootReducer;
