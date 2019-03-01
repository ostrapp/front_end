import React, { Component } from 'react'
import { Card, Tab, Tabs, Button, Form } from 'react-bootstrap'

class PaymentOptions extends Component {
  render () {
    let saldo = 20.21

    return (
      <Tabs defaultActiveKey='Saldo' id='uncontrolled-tab-example'>
        <Tab eventKey='Saldo' title={saldo + '€'} disabled={saldo <= 0}>
          <Card>
            <Card.Body>
              DIT GAAT VEEL MONEY KOSTEN
            </Card.Body>
            <Card.Footer>
              <Button>Yeeed buy all the things.</Button>
            </Card.Footer>
          </Card>
        </Tab>
        <Tab eventKey='Ideal' title='Ideal'>
          <Card>
            <Card.Body>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Select bank</Form.Label>
                <Form.Control as='select'>
                  <option>ING</option>
                  <option>Rabobank</option>
                  <option>ABN AMRO</option>
                  <option>bunq</option>
                  <option>Knab</option>
                  <option>Moneyou</option>
                  <option>RegioBank</option>
                  <option>SNS</option>
                </Form.Control>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button>Hello</Button>
            </Card.Footer>
          </Card>
        </Tab>
        <Tab eventKey='Paypal' title='Paypal'>
            Hallo1
        </Tab>
        <Tab eventKey='Crypto' title='Crypto-currency'>
          Hallo1
        </Tab>
      </Tabs>
    )
  }
}

export default PaymentOptions
