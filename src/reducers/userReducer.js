/*
 src/reducers/userReducer.js
*/
const docCookies = {
  getItem: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false }
    var sExpires = ''
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd
          break
        case String:
          sExpires = '; expires=' + vEnd
          break
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString()
          break
      }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '')
    return true
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '')
    return true
  },
  hasItem: function (sKey) {
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]) }
    return aKeys
  }
}

export default (state = { loading: false, loggedIn: false, cart: [] }, action) => {
  switch (action.type) {
    /* User register */
    case 'R_REGISTER':
      return { ...state, loading: true }
    case 'S_REGISTER':
      return { ...state, loading: false }
    case 'F_REGISTER':
      return { ...state, loading: false, error: 'Error while fetching user' }

    /* User login */
    case 'R_LOGIN':
      return { ...state, loading: true }
    case 'S_LOGIN':
      docCookies.setItem('user', JSON.stringify(action.payload.data))
      return { ...state, loading: false, loggedIn: true, user: action.payload.data.user }
    case 'F_LOGIN':
      console.log('error while loggin in')
      return { ...state, loading: false }

    /* Login helpers */
    case 'LOGIN_CHECK':
      let user = docCookies.getItem('user')
      let savedCart = JSON.parse(localStorage.getItem('cart'))

      if (user) {
        return { ...state, loading: false, loggedIn: true, user: JSON.parse(user).user }
      } else {
        return { ...state, loading: false, loggedIn: false, user: {}, cart: savedCart }
      }
    case 'LOGOUT':
      docCookies.removeItem('user')
      return { ...state, loading: false, loggedIn: false, loggedOut: true, user: {} }
    case 'LOGOUT_CONFIRM':
      return { ...state, loggedOut: false }

    /* Products */
    case 'ADD_PRODUCT':
      let cart = JSON.parse(localStorage.getItem('cart'))

      if (cart) {
        cart.push(action.product)
        localStorage.setItem('cart', JSON.stringify(cart))
      } else {
        localStorage.setItem('cart', JSON.stringify([]))
      }

      return { ...state, cart: [...state.cart, action.product] }
    case 'DELETE_PRODUCT':
      let deleteCart = JSON.parse(localStorage.getItem('cart'))

      let index = 0
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.product.id) {
          index = i
        }
      }

      deleteCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(deleteCart))

      return { ...state, cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)] }
    default:
      return state
  }
}