import React, { Component } from 'react'
import { Col, Tabs, Tab, Container } from 'react-bootstrap'
import Register from './register'
import Login from './login'
import { logout } from '../../actions/simpleAction'
import { connect } from 'react-redux'
import PaymentOptions from '../pay/PaymentOptions'

class LogRegister extends Component {
  render () {
    if (!this.props.loggedIn) {
      return (
        <Col md={4}>
          <Tabs defaultActiveKey='Login' id='uncontrolled-tab-example' className='bg-info'>
            <Tab eventKey='Login' title='Login'>
              <Login />
            </Tab>
            <Tab eventKey='Register' title='Register'>
              <Register />
            </Tab>
          </Tabs>
        </Col>
      )
    } else return (<Col md={6}><PaymentOptions /></Col>)
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogRegister)
