import React, { Component } from 'react'
import { getBrands } from '../actions/simpleAction'
import { connect } from 'react-redux'
import { Badge } from 'react-bootstrap'

class BrandsPreview extends Component {
  componentDidMount () {
    this.props.getBrands()
  }

  render () {
    let { loading, brands, error } = this.props

    let brandPills = brands.map((brand) => {
      return (
        <h1 key={brand.id} style={{ display: 'inline' }}><Badge variant='primary'>{ brand.name }</Badge> </h1>
      )
    })

    return (
      <div>
        <hr />
        <h2>Popular brands</h2>
        { brandPills }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.brands.loading,
    brands: state.brands.brands,
    error: state.brands.error
  }
}

const mapDispatchToProps = dispatch => ({
  getBrands: () => dispatch(getBrands())
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandsPreview)
