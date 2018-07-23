import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export const ProductRow = props => {
    return (
        <div className={classnames(`d-flex flex-row text-primary`)}>
            <div className={classnames(`col`)}>
                {props.productName}
            </div>
            <div className={classnames(`col`)}>
                {props.productPrice}
            </div>
        </div>
    )
}