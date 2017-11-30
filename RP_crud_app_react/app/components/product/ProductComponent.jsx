import React from 'react';
import { Link } from 'react-router'

class ProductComponent extends React.Component{

	render(){
		return (
			<div className="panel panel-default">
			  	<div className="panel-heading">Product Management</div>
			  	<div className="panel-body">
					<ul className="nav nav-tabs">
					    <li><Link activeClassName="active" to="product/list">Product List</Link></li>
					    <li><Link activeClassName="active" to="product/new">Add New Product</Link></li>
					</ul>
					<br />
					{this.props.children}
			  	</div>
			</div>
		);
	}

}

export default ProductComponent;