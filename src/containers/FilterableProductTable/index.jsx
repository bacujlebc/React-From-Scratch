import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import lodash from "lodash";

import "../../helpers.scss";
import "./styles.scss";
import SearchBar from "../../components/FilterComponents/SearchBar";
import { ProductTable } from "../../components/FilterComponents/ProductTable";

import { products } from "../../data/product-json";

export default class FilterableProductTable extends PureComponent {
    state = {
        isInStock: false,
        searchInput: ""
    };

    onSearchChanged = (controlName, controlValue) => {
        const cloneState = lodash.cloneDeep(this.state);
        cloneState[controlName] = controlValue;
        this.setState(cloneState);
    };

    render() {
        console.info(`i'm rendered 1 ${new Date()}`);
        return (
            <div
                className={classnames(
                    `d-flex flex-column m-t-20 product-wrapper`
                )}
            >
                <SearchBar
                    isInStock={this.state.isInStock}
                    searchInput={this.state.searchInput}
                    onSearchChanged={this.onSearchChanged}
                />
                <ProductTable
                    products={products}
                    isInStock={this.state.isInStock}
                    filterValue={this.state.searchInput}
                />
            </div>
        );
    }
}
