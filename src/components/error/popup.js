import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import connect from 'react-redux/es/connect/connect'
import { loggedOutConfirm } from '../../actions/simpleAction'

class PopUp extends Component {
  handleClose = () => {
    this.props.loggedOutConfirm()
  }

  render () {
    return (
      <Modal show={this.props.loggedOut} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logout successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have been redirected to the home page.</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClose}>
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedOut: state.user.loggedOut
  }
}

const mapDispatchToProps = dispatch => ({
  loggedOutConfirm: () => dispatch(loggedOutConfirm())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
