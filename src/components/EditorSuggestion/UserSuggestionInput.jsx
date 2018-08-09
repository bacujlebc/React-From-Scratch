import React, { Component, PureComponent } from "react";
import classnames from "classnames";

export default class UserSuggestionInput extends PureComponent {
    handleChange = e => {
        this.props.onSuggestionValueChange(e.target.value);
    };

    render() {
        return (
            <textarea
                className={classnames(`form-control`)}
                value={this.props.inputValue}
                onChange={this.handleChange}
            />
        );
    }
}
