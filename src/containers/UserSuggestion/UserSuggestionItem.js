import React, { Component, PureComponent } from "react";
import classnames from "classnames";
import lodash from "lodash";

import "../../helpers.scss";
import "./UserSuggestionItem.scss";
import UserSuggestionInput from "./UserSuggestionInput";

const UserSuggestionItem = props => {
    let numberOfLikes = props.likes ? `${props.likes} likes` : null;
    const { removeHandler, likeArticle, originalText, element } = props;

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
                        onClick={removeHandler}
                    >
                        Remove
                    </button>
                </div>

                <p className={classnames(`card-text`)}>{originalText}</p>
                <h6 className={classnames(`card-title mb-2 text-muted`)}>
                    Users version
                </h6>
                <UserSuggestionInput {...props} />
                <div className="d-flex align-items-center justify-content-between">
                    <i
                        className="fas fa-heart"
                        onClick={_ => likeArticle(element.id)}
                    >
                        {numberOfLikes}
                    </i>

                    <button
                        type="button"
                        className={classnames(
                            `btn btn-primary float-right m-t-20`
                        )}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSuggestionItem;
