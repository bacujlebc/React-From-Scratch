import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export const ProductCategoryRow = props => {
    return (
        <div className={classnames(`col`)}>
            {props.categoryName}
        </div>
    )
}