import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';

import * as basketActions from '../actions/basket';

export class BasketPage extends Component {

    constructor(props) {
        super(props);
        props.loadBasket();
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
                        <ProductList products={products} addToBasket={() => {}} />
                    </section>
                    <section className="col">
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
