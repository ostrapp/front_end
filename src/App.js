import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/navigation/navigation'
import Login from './routes/login'
import Buy from './routes/buy'
import Home from './routes/home'
import Cart from './routes/cart'
import register from './routes/register'
import noMatch from './routes/404'

import { loginCheck } from './actions/simpleAction'
import PopUp from './components/error/popup'

class App extends Component {
  componentDidMount () {
    this.props.loginCheck()
  }

  render () {
    return (
      <Router>
        <div>
          <Navigation />
          <PopUp />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Buy' component={Buy} />
            <Route path='/Register' component={register} />
            <Route path='/Login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedOut: state.user.loggedOut
  }
}

const mapDispatchToProps = dispatch => ({
  loginCheck: () => dispatch(loginCheck())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
