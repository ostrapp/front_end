/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import brandsReducer from './brandsReducer'
import userReducer from './userReducer'

export default combineReducers({
  brands: brandsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  user: userReducer
})
