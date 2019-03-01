/*
 src/reducers/brandsReducer.js
*/
export default (state = { brands: [] }, action) => {
  switch (action.type) {
    case 'R_BRAND':
      return { ...state, loading: true, brands: [] }
    case 'S_BRAND':
      return { ...state, loading: false, brands: action.payload.data }
    case 'F_BRAND':
      return { ...state, loading: false, error: 'Error while fetching brands' }
    default:
      return state
  }
}
