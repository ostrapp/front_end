import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import React from 'react'

const PrivateRouteComponent = (props) => (
  <Route {...props.routeProps} render={() => (
    props.user ? (
      <props.Component />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />)
  )} />
)

const mapStateToProps = (state, ownProps) => {
  return {
    user: localStorage.getItem('user'),
    location: ownProps.path,
    routeProps: {
      exact: ownProps.exact,
      path: ownProps.path
    }
  }
}

export default connect(mapStateToProps, null)(PrivateRouteComponent)
