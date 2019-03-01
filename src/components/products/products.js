import React, { Component } from 'react'
import { getAllProducts } from '../../actions/simpleAction'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from './product'
import Alert from '../error/alert'
import Loading from '../error/loading'

class Products extends Component {
  componentDidMount () {
    this.props.getAllProducts()
  }

  render () {
    let { products, error } = this.props

    return (
      <div>
        <Alert error={error} />
        <Row>
          {
            products.map((product) => {
              return (<Col key={product.id} md={4} lg={3}><Product product={product} /></Col>)
            })}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error
  }
}

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
