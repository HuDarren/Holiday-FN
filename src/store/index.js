import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import item from './item';
import wishList from './wishlist';
import group from './group';
import profile from './profile';

const reducer = combineReducers({ user, item, wishList, group, profile });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './item';
export * from './wishlist';
export * from './group';
export * from './profile';
