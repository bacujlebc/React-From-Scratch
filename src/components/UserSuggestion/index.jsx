import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import lodash from "lodash";

import "../../helpers.scss";
import "./styles.scss";
import UserSuggestionInput from "./UserSuggestionInput";

export const UserSuggestion = props => {
    return (
        <div className={classnames(`card m-b-10`)}>
            <div className={classnames(`card-body`)}>
                <h6 className={classnames(`card-title mb-2 text-muted`)}>
                    Original text
                </h6>

                <p className={classnames(`card-text`)}>{props.originalText}</p>

                <h6 className={classnames(`card-title mb-2 text-muted`)}>
                    Users version
                </h6>
                <UserSuggestionInput {...props} />

                <button
                    type="button"
                    className={classnames(`btn btn-primary float-right m-t-20`)}
                >
                    Send
                </button>
            </div>
        </div>
    );
};
