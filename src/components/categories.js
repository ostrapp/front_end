import React, { Component } from 'react'
import { getCategories, getAllProducts } from '../actions/simpleAction'
import { connect } from 'react-redux'
import { Nav, Card, Form } from 'react-bootstrap'
import Category from './category'



class Categories extends Component {

	componentDidMount() {
		this.props.getCategories()
	}

	_handleClick = () => {
		this.props.getAllProducts()
	}

	render () {
		let { categories, loading, error } = this.props

		return (
			<div>
				<Form.Control type="text" placeholder="Search products" />

				<Card style={{marginTop: 20}}>
					{ loading && <p>Loading categories...</p> }
					<Nav defaultActiveKey="/home" className="flex-column">
						<Nav.Link onClick={this._handleClick}>Featured</Nav.Link>
						{
							categories.map((category) => {
								return (
									<Category key={category.id} category={ category }/>
								)
							})
						}
					</Nav>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.categories.loading,
		categories: state.categories.categories,
		error: state.categories.error
	}
}

const mapDispatchToProps = dispatch => ({
	getCategories: () => dispatch(getCategories()),
	getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
