import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import lodash from "lodash";

import "../../helpers.scss";
import "./styles.scss";
import UserSuggestionInput from "./UserSuggestionInput";

export default function UserSuggestion(props) {
    return (
        <div className={classnames(`card m-b-10`)}>
            <div className={classnames(`card-body`)}>


                <div className="d-flex align-items-center justify-content-between">
                    <h6 className={classnames(`card-title mb-2 text-muted`)}>
                        Original text
                    </h6>
                    <button
                        type="button"
                        className={classnames(`btn btn-danger`)}
                        onClick={props.removeHandler}
                    >
                        Remove
                    </button>
                </div>

                <p className={classnames(`card-text`)}>{props.originalText}</p>

                <h6 className={classnames(`card-title mb-2 text-muted`)}>
                    Users version
                </h6>
                <UserSuggestionInput {...props} />

                <div className="d-flex align-items-center justify-content-between">
                    <i className="fas fa-heart"
                        onClick={ _ => console.log('asdas') }
                    />

                    <button
                        type="button"
                        className={classnames(
                            `btn btn-primary float-right m-t-20`
                        )}
                        onClick={e => props.approveNewTitle(e.target.value)}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
