import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem'
import { Table, Card } from 'react-bootstrap'

class ShoppingList extends Component {
  render () {
    let { cart } = this.props

    return (
      <Card>
        <Card.Body>
          <Card.Title>{ cart.length } items in cart</Card.Title>
        </Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, i) => {
                return (<CartItem key={i} item={item} />)
              })
            }
          </tbody>
        </Table>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.user.cart
  }
}

export default connect(mapStateToProps, null)(ShoppingList)
