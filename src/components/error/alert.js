import React from 'react'
import { Alert } from 'react-bootstrap'

class AlertMessage extends React.Component {
  render () {
    if (this.props.error) {
      return (
        <Alert dismisssible variant='danger'>
          <p>
            {this.props.error}
          </p>
        </Alert>
      )
    } else return null
  }
}

export default AlertMessage
