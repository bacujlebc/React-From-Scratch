import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Button } from "@material-ui/core/Button";

import UserSuggestionInput from "./UserSuggestionInput";
import { sendArticleSuggestion } from "../../actions/articles";
import "../../helpers.scss";
import "./styles.scss";

class UserSuggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
    }

    handleChange = value => {
        this.setState({
            inputValue: value
        });
    };

    sendSuggestion = () => {
        const data = { id: this.props.id, text: this.state.inputValue };
        this.props.saveSuggestion(data);
        this.setState({ inputValue: "" });
    };

    render() {
        const suggestions = this.props.suggestions.length > 0 && (
            <Fragment>
                <h6
                    className={classnames(
                        `card-title mb-2 text-success m-t-20`
                    )}
                >
                    User suggestions:
                </h6>
                <ul className={classnames(`user-suggestion-list`)}>
                    {this.props.suggestions.map((el, i) => (
                        <li
                            className={classnames(
                                `d-flex justify-content-between`
                            )}
                            key={i}
                        >
                            <p className={classnames(``)}>{el}</p>
                            <button
                                className={classnames(`btn btn-primary`)}
                                onClick={this.sendSuggestion}
                            >
                                Approve
                            </button>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );

        return (
            <div className={classnames(`card m-b-10`)}>
                <div className={classnames(`card-body`)}>
                    <h6 className={classnames(`card-title mb-2 text-muted`)}>
                        Original text
                    </h6>

                    <p className={classnames(`card-text`)}>
                        {this.props.originalText}
                    </p>

                    {this.props.currPage === "userPage" ? (
                        <Fragment>
                            <h6
                                className={classnames(
                                    `card-title mb-2 text-muted`
                                )}
                            >
                                Users version
                            </h6>
                            <UserSuggestionInput
                                inputValue={this.state.inputValue}
                                onSuggestionValueChange={this.handleChange}
                                isTextArea={true}
                            />

                            <button
                                type="button"
                                className={classnames(
                                    `btn btn-primary float-right m-t-20`
                                )}
                                onClick={this.sendSuggestion}
                            >
                                Send
                            </button>
                            {/* <Button variant="contained" color="primary">
                                Hello World
                            </Button> */}
                        </Fragment>
                    ) : (
                        <Fragment>
                            {suggestions}

                            <div className={classnames(`d-flex`)}>
                                <UserSuggestionInput
                                    inputValue={this.state.inputValue}
                                    onSuggestionValueChange={this.handleChange}
                                    isTextArea={false}
                                />

                                <button
                                    type="button"
                                    className={classnames(
                                        `btn btn-primary float-right m-t-20`
                                    )}
                                    onClick={this.sendSuggestion}
                                >
                                    Approvedd
                                </button>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articleList: state.article
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveSuggestion: data => {
            dispatch(sendArticleSuggestion(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSuggestion);
