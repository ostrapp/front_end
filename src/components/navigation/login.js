import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Card, Form } from 'react-bootstrap'
import { login } from '../../actions/simpleAction'

class Login extends Component {
  
  state = {
    email: '',
    password: ''
  }
  
  _handleInputChange = (e) => {
    const name = e.target.name

    this.setState({
      [name]: e.target.value
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._handleLogin()
    }
  }

  _handleLogin = () => {
    let { email, password } = this.state

    let user = {
      email: email,
      password: password
    }

    this.props.login(user)
  }

  render () {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Login as consumer</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>If you don't have an account: Click here to register.</Card.Subtitle>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="email@gmail.com"
              onChange={this._handleInputChange}
              onKeyPress={this._handleKeyPress}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              onChange={this._handleInputChange}
              onKeyPress={this._handleKeyPress}
            />
          </Form.Group>

          <Card.Link onClick={this._handleLogin}>Login</Card.Link>
        </Card.Body>
      </Card>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
