import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product'

import classes from './Products.module.css';


class Products extends Component {

    state = {
        products: null,
        error: false
    }

    componentDidMount () {
        axios.get( 'https://fakestoreapi.com/products?limit=10' )
            .then( response => {
                this.setState( { products: response.data } );
                // console.log(this.state.products)
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

    

    render () {
        
        return (
            <div className={classes.Products}>
                {this.state.products? this.state.products.map(product => (
                    <Product 
                    key={product.id}
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    />
                )): null}
                
            </div>
        );
    }
}

export default Products;