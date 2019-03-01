import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProductFromCart } from '../actions/simpleAction';
import { Button } from 'react-bootstrap'

class CartItem extends Component {

    handleClick = () => {
        this.props.deleteProductFromCart(this.props)
    }

    render () {
        let { name, description } = this.props.item

        return (
            <tr>
                <td><Button onClick={this.handleClick}>Delete</Button></td>
                <td>{ name }</td>
                <td>{ description }</td>
            </tr>
        )
    }
}

const mapDispatchToProps = dispatch => ({
	deleteProductFromCart: (product) => dispatch(deleteProductFromCart(product))
})

export default connect(null, mapDispatchToProps)(CartItem)
