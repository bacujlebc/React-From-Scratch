import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

import { ProductCategoryRow } from '../ProductCategoryRow';
import { ProductRow } from '../ProductRow';

export const ProductTable = props => {
    const rows = [];
    let lastCategory = null;
    console.log(props);

    props.products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow categoryName={product.category} key={product.category} />
            )
        }
        rows.push(
            <ProductRow productName={product.name} productPrice={product.price} key={product.name} />
        )
        lastCategory = product.category;
    })

    return (
        <div className={classnames(`d-flex flex-column`)}>
            <div className={classnames(`d-flex`)}>
                <div className={classnames(`col`)} >Name</div>
                <div className={classnames(`col`)} >Price</div>
            </div>

            <div>
                {rows}
            </div>
        </div>
    )
}