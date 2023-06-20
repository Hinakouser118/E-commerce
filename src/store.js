
import { createStore } from 'redux';
import rootReducer from './reducers'; // Create the rootReducer that combines all reducers

const store = createStore(rootReducer);

export default store;
