import React, { Component } from 'react';
import classnames from 'classnames';

import "../../helpers.scss";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    handleChange = e => {
        if (e.target.name === "isInStock") {
            this.props.onInStockChanged(e.target.name, !this.props.isOnStock);
        }
    }

    render() {
        return (
            <div className={classnames(`p-10`)}>
                <input
                    type="text"
                    name="input"
                    className={classnames(`w-100`)}
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Search..."
                />
                <div className={classnames(`d-flex align-items-center`)}>
                    <input
                        type="checkbox"
                        name="isInStock"
                        checked={this.props.isOnStock}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="showProductsInStock" className={classnames(`m-l-5 m-b-0`)}>Check this custom checkbox</label>
                </div>
            </div>
        )
    }
}