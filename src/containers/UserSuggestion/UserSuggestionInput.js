import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import lodash from "lodash";

export default class UserSuggestionInput extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { originalText, handleChange } = this.props;
        return (
            <textarea
                className={classnames(`form-control`)}
                value={originalText}
                onChange={e => handleChange(e.target.value)}
            />
        );
    }
}
