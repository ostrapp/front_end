import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categories from '../components/categories'
import Products from '../components/products/products'
import { Col, Container, Row, Card } from 'react-bootstrap'

class Buy extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col sm={3}>
            <Categories />
          </Col>
          <Col sm={9}>
            <Products />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Buy
