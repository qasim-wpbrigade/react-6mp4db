import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import TodoReducer from './reducers/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Add all reducers
const rootReducers = combineReducers({
  TodoReducer,
});

// middlewares
const middlewares = [thunkMiddleware];

// Create redux store
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default Store;
