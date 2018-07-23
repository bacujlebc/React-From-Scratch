import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "../../../helpers.scss";
export default class SearchBar extends Component {
    handleChange = e => {
        if (e.target.name === "isInStock") {
            this.props.onSearchChanged(e.target.name, !this.props.isInStock);
        } else if (e.target.name === "searchInput") {
            this.props.onSearchChanged(e.target.name, e.target.value);
        }
    };

    render() {
        return (
            <div className={classnames(`p-10`)}>
                <input
                    type="text"
                    name="searchInput"
                    className={classnames(`w-100`)}
                    value={this.props.searchInput}
                    onChange={this.handleChange}
                    placeholder="Search..."
                />
                <div className={classnames(`d-flex align-items-center`)}>
                    <input
                        type="checkbox"
                        name="isInStock"
                        checked={this.props.isInStock}
                        onChange={this.handleChange}
                    />
                    <label
                        htmlFor="showProductsInStock"
                        className={classnames(`m-l-5 m-b-0`)}
                    >
                        Only show products in stock
                    </label>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    isInStock: PropTypes.bool.isRequired,
    searchInput: PropTypes.string.isRequired,
    onSearchChanged: PropTypes.func.isRequired
};
