/*
 src/actions/simpleAction.js
*/

/* Categories */
export function getCategories () {
  return {
    types: ['R_CAT', 'S_CAT', 'F_CAT'],
    payload: {
      request: {
        url: '/categories'
      }
    }
  }
}

/* Products */
export function getProducts (category) {
  return {
    types: ['R_PRO', 'S_PRO', 'F_PRO'],
    payload: {
      request: {
        url: '/categories/' + category + '/products'
      }
    }
  }
}

export function getAllProducts () {
  return {
    types: ['R_PRO', 'S_PRO', 'F_PRO'],
    payload: {
      request: {
        url: '/products'
      }
    }
  }
}

/* Brands */
export function getBrands () {
  return {
    types: ['R_BRAND', 'S_BRAND', 'F_BRAND'],
    payload: {
      request: {
        url: '/brands'
      }
    }
  }
}

/* Register  */
export function register (user) {
  return {
    types: ['R_REGISTER', 'S_REGISTER', 'F_REGISTER'],
    payload: {
      request: {
        url: '/register',
        method: 'POST',
        data: {
          'email': user.email,
          'username': user.username,
          'password': user.password,
          'password_confirmation': user.passwordConfirmation
        }
      }
    }
  }
}

export function loginCheck () {
  return {
    type: 'LOGIN_CHECK'
  }
}

export function login (user) {
  return {
    types: ['R_LOGIN', 'S_LOGIN', 'F_USER'],
    payload: {
      request: {
        url: '/login',
        method: 'POST',
        data: {
          'email': user.email,
          'password': user.password
        }
      }
    }
  }
}

export function logout () {
  return {
    type: 'LOGOUT'
  }
}

export function loggedOutConfirm () {
  return {
    type: 'LOGOUT_CONFIRM'
  }
}

/* Cart */
export function addProductToCart (product) {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export function deleteProductFromCart (product) {
  return {
    type: 'DELETE_PRODUCT',
    product
  }
}
