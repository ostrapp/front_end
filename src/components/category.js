import React, { Component } from 'react'
import { getProducts } from '../actions/simpleAction'
import { connect } from 'react-redux'
import {Nav} from 'react-bootstrap'


class Category extends Component {
    handleClick = () => {
        this.props.getProducts(this.props.category.id);
    }

    render() {
        let { category } = this.props

        return(
            <Nav.Link key={ category.id } onClick={this.handleClick}>{ category.name } </Nav.Link>
        )
    }
}

const mapDispatchToProps = dispatch => ({
	getProducts: (category) => dispatch(getProducts(category))
})

export default connect(null, mapDispatchToProps)(Category)