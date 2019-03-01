import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Carousel } from 'react-bootstrap'
import Products from '../components/products/products'
import LogRegister from '../components/navigation/logregister'
import BrandsPreview from '../components/brandsPreview'
import { logout } from '../actions/simpleAction'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <Container>
        <div className='carousel-overlay' />
        <Carousel className='carousel-fade'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://m.media-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Hero/UK_NFTE_010219_MD_GW_EU5_Q1acquisition_GW_D_GRD_TallHero_1500x600._CB454547567_.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://m.media-amazon.com/images/G/01/amazonglobal/images/Fuji/hero/English/2019/January/Fuji_EN_TallHero_Confidence_Jan19_1X._CB458553799_.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://m.media-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Hero/Ship45EN_1X._CB454091417_.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className='home'>
          <Col>
            <Jumbotron fluid>
              <Container>
                <h1>Selling and buying products without fees.</h1>
                <p>
                                    Bier App is the new way to sell and buy products
                </p>
              </Container>
            </Jumbotron>
          </Col>

          <LogRegister />

        </Row>
        <hr />
        <h2>Popular products</h2>
        <Products />

        <BrandsPreview />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedOut: state.user.loggedOut
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
