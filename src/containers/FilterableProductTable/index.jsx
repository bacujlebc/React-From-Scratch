import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import lodash from 'lodash';

import "../../helpers.scss";
import "./styles.scss";
import SearchBar from '../SearchBar';
import { ProductTable } from '../ProductTable';

import { products } from '../../data/product-json';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInStock: false
        }
    }

    onInStockChanged = (controlName, controlValue) => {
        console.log(controlName, controlValue);
        if (controlName === "isOnStock") {
            const cloneState = lodash.cloneDeep(this.state);
            cloneState[controlName] = controlValue;
            this.setState(cloneState);
        }
        
    }

    render() {
        return (
            <div className={classnames(`d-flex flex-column m-t-20 product-wrapper`)}>
                <SearchBar
                    isOnStock={this.state.isOnStock}
                    onInStockChanged={this.onInStockChanged}
                />
                <ProductTable products={products}/>
            </div>
        )
    }
}