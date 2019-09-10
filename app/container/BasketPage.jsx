import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';

import * as basketActions from '../actions/basket';
import Basket from "../components/Basket";

export class BasketPage extends Component {

    constructor(props) {
        super(props);
        props.loadBasket();
    }

    /**
     * Method that will add the item to the cart
     */
    addProduct = (cartId, productId) => {
        const { addAnItemToACart } = this.props
        addAnItemToACart(cartId, productId)
    }

    render() {
        const { isLoading, products, basket } = this.props;

        if (isLoading) {
            return <div> Loading your basket </div>;
        }

        return (
            <div className="container">
                <header className="mt-5 mb-5">
                    <h1>Shopping Basket</h1>
                </header>
                <main className="row">
                    <section className="col">
                        <ProductList products={products} addToBasket={(productId) => this.addProduct(basket.id, productId)} />
                    </section>
                    <section className="col">
                        <Basket basket={basket} products={products} />
                        {/* Basket */}
                    </section>
                </main>
            </div>
        )
    }

}

export function mapStateToProps({ basket, products }) {
    return {
        isLoading: !basket.id,
        products,
        basket,
    }
}

export default connect(mapStateToProps, basketActions)(BasketPage);
