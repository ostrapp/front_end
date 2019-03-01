import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, Image, Button} from 'react-bootstrap'
import { addProductToCart } from '../../actions/simpleAction';


class Product extends Component {

    addToCart = () => {
        this.props.addProductToCart(this.props.product)
    }

    render() {
        let { product } = this.props

        return(
            <Card key={ product.id } style={{marginTop: 20}}>
                <Card.Img src="https://via.placeholder.com/400x300.png?text=Product"/>
                <Card.Body>
                    <Image/>
                    <Card.Title> { product.name } </Card.Title>
                    <Card.Subtitle>{ product.description }</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.addToCart}>Add to cart</Button>
                </Card.Footer>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => ({
	addProductToCart: (product) => dispatch(addProductToCart(product))
})

export default connect(null, mapDispatchToProps)(Product)
