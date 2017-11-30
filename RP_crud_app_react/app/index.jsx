import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'

import HomeComponent from './components/home/HomeComponent.jsx';
import ProductComponent from './components/product/ProductComponent.jsx';
import ProductListComponent from './components/product/ProductListComponent.jsx';
import ProductNewComponent from './components/product/ProductNewComponent.jsx';
import ProductEditComponent from './components/product/ProductEditComponent.jsx';
import AboutComponent from './components/about/AboutComponent.jsx';

class App extends React.Component {
    
    render() {
        return (
        	<div>
	        	<div className="row">
		        	<div className="col-sm-8 col-sm-offset-2">
					    <nav className="navbar navbar-default">
					        <div className="container-fluid">
					            <div className="navbar-header">
					                <a className="navbar-brand">Simple CRUD</a>
					            </div>
					            <div id="navbar" className="navbar-collapse collapse">
					                <ul className="nav navbar-nav">
					                    <li><a href="#/">Home</a></li>
					                    <li><a href="#/product">Product Management</a></li>
					                    <li><a href="#/about">About</a></li>
					                </ul>
					            </div>
					        </div>
					    </nav>
					    <Router history={hashHistory}>
						    <Route path="/" component={HomeComponent} />
						    <Route path="/product" component={ProductComponent}>
						    	<Route path="/product/list" component={ProductListComponent} />
						    	<Route path="/product/new" component={ProductNewComponent} />
						    	<Route path="/product/edit/:productId" component={ProductEditComponent} />
						    </Route>
						    <Route path="/about" component={AboutComponent} />
						</Router>
					</div>
				</div>
			</div>
        );
    }

}

render( <App /> , document.getElementById('app'));