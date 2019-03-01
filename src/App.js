import React, { Component } from 'react'
// CSS
import './App.css'
// Redux and router
import { connect } from 'react-redux'
import { loginCheck } from './actions/simpleAction'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import Navigation from './components/navigation/navigation'
import PopUp from './components/error/popup'
import { Home, Buy, Register, Login, Cart, Account, Orders, noMatch } from './routes'

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
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route path='/account' component={Account} />
            <Route path='/orders' component={Orders} />
            <Route path='/selling' component={Cart} />

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
