import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ShoppingList from '../components/shoppingList'

import LogRegister from '../components/navigation/logregister'
import PaymentOptions from '../components/pay/PaymentOptions'

class Cart extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col>
            <ShoppingList />
          </Col>
          <LogRegister />
        </Row>
      </Container>
    )
  }
}

export default Cart
