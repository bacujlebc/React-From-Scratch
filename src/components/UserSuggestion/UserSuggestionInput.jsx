import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import "./styles.scss";

export default class UserSuggestionInput extends PureComponent {
    handleChange = e => {
        this.props.onSuggestionValueChange(e.target.value);
    };

    render() {
        return (
            <React.Fragment>
                {this.props.isTextArea ? (
                    <textarea
                        className={classnames(`form-control`)}
                        value={this.props.inputValue}
                        onChange={this.handleChange}
                    />
                ) : (
                    <input
                        className={classnames(`form-control editor-input`)}
                        value={this.props.inputValue}
                        onChange={this.handleChange}
                    />
                )}
            </React.Fragment>
        );
    }
}
