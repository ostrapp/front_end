/*
 src/reducers/categoriesReducer.js
*/
export default (state = { categories: [] }, action) => {
  switch (action.type) {
    case 'R_CAT':
      return { ...state, loading: true, categories: [] }
    case 'S_CAT':
      return { ...state, loading: false, categories: action.payload.data }
    case 'F_CAT':
      return { ...state, loading: false, error: 'Error while fetching todos' }
    default:
      return state
  }
}
