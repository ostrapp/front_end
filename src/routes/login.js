import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Col, Container, Row } from 'react-bootstrap'
import { login } from '../actions/simpleAction'
import { Redirect } from 'react-router-dom'
import LoginCard from '../components/navigation/login'

class Login extends Component {
  render () {
    if (this.props.loggedIn) {
      return <Redirect to={'/'} />
    }

    return (
      <Container>
        <br />
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <LoginCard />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
