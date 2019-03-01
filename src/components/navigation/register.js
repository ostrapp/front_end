import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form } from 'react-bootstrap'
import { register } from '../../actions/simpleAction'

class Register extends Component {

  constructor (props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name

    console.log(e.target.value)

    this.setState({
      [name]: e.target.value
    })
  }

  handleRegister = () => {
    let { username, email, password, passwordConfirmation } = this.state

    let user = {
      username: username,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }

    this.props.register(user)
  }

  render () {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Register a consumer account</Card.Title>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="username"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="email@gmail.com"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="passwordConfirmation"
              type="password"
              placeholder="confirm password"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check name="login" type='checkbox' label='Keep me logged in' />
          </Form.Group>

          <Card.Link onClick={this.handleRegister}>Login</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => ({
  register: (user) => dispatch(register(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
