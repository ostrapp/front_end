/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { logout } from './actions/simpleAction'

const client = axios.create({
  baseURL: 'https://deliverly.koenzk.nl/api/v1',
  responseType: 'json'
})

const middlewareConfig = {
  onError: ({ action, error, next, dispatch }) => {
    if (error.response.status === 401) {
      return dispatch(logout())
    }
  }
}

export default function configureStore (initialState = {  }) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        axiosMiddleware(client, middlewareConfig)
      )
    )
  )
}
