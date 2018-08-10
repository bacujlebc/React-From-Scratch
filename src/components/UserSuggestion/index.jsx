import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import UserSuggestionInput from "./UserSuggestionInput";
import { sendArticleSuggestion } from "../../actions/articles";
import "../../helpers.scss";
import "./styles.scss";

export const UserSuggestion = props => {
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

                <div className="d-flex align-items-center justify-content-between">
                    <i
                        className="fas fa-heart"
                        onClick={_ => console.log("asdas")}
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
