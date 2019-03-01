import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Nav,
  Navbar,
  Button,
  Badge,
  Container,
  NavDropdown,
  InputGroup,
  DropdownButton,
  FormControl,
  Dropdown
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../../actions/simpleAction'

class Navigation extends Component {

  handleLogout = () => {
    this.setState({
      logout: true,
    })

    this.props.logout()
  }

  render () {
    let { loggedIn, user, amount } = this.props

    return (
        <Navbar style={{ marginBottom: 20 }} bg='info' variant='dark'>
          <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand href='#home'>
              <img
                alt=''
                src='/logo.svg'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
              {'Deliverly'}
            </Navbar.Brand>
          </LinkContainer>

          <Nav className='mr-auto'>
            <LinkContainer to={'/buy'}>
              <Nav.Link href='buy'>Buy</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/sell'}>
              <Nav.Link href='sell'>Sell</Nav.Link>
            </LinkContainer>

            <InputGroup>
              <FormControl variant=""/>
            </InputGroup>
          </Nav>

          { loggedIn
            ? <Nav>
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  <LinkContainer to={'/orders'}>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={'/selling'}>
                    <NavDropdown.Item>Selling</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to={'/account'}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to={'/cart'}>
                  <Button className="btn-primary active">
                    Cart <Badge variant='dark'>{ amount }</Badge>
                    <span className='sr-only'>Items</span>
                  </Button>
                </LinkContainer>
              </Nav>
            : <Nav>
                <LinkContainer to={'/register'}>
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/login'}>
                  <Nav.Link>
                      Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/cart'}>
                  <Button className="btn-primary active">
                    Cart <Badge variant='dark'>{ amount }</Badge>
                    <span className='sr-only'>Items</span>
                  </Button>
                </LinkContainer>
              </Nav>
          }
          </Container>
        </Navbar>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user.user,
    amount: state.user.cart.length
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
