import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap'
import RegisterCard from '../components/navigation/register'

class Register extends Component {
  render () {
    return (
      <Container>
        <br />
        <Row>
          <Col>
            <RegisterCard />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Want to sell a product?</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Selling your products has never been easier. Futhermore, bier app does not charge extra fees over your products.</Card.Subtitle>
                <Button variant='outline-primary' size='md' block>
                                    Click here to learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect()(Register)
