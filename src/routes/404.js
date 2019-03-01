import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class noMatch extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h4>404: Page not found.</h4>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default noMatch