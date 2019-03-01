/*
 src/reducers/products.js
*/
export default (state = { products: [] }, action) => {
  switch (action.type) {
    case 'R_PRO':
      return { ...state, loading: true }
    case 'S_PRO':
      return { ...state, loading: false, products: action.payload.data }
    case 'F_PRO':
      return { ...state, loading: false, error: 'Error while fetching todos' }
    default:
      return state
  }
}
