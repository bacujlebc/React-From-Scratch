import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import UserSuggestionInput from '../UserSuggestion/UserSuggestionInput';
import { sendArticleSuggestion } from '../../actions/articles';
import '../../helpers.scss';
import './styles.scss';

class EditorSuggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isTextArea: false
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
        this.setState({ inputValue: '' });
    };

    render() {
        const cardHeader = (
            <div
                className={classnames(
                    `d-flex justify-content-between align-items-center`
                )}
            >
                <h6 className={classnames(`card-title mb-2 text-muted`)}>
                    Original text
                </h6>
                <button className={classnames(`btn btn-primary`)}>
                    Delete
                </button>
            </div>
        );

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
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            </Fragment>
        );

        return (
            <div className={classnames(`card m-b-10`)}>
                <div className={classnames(`card-body`)}>
                    {cardHeader}

                    <p className={classnames(`card-text`)}>
                        {this.props.originalText}
                    </p>

                    {suggestions}

                    <UserSuggestionInput
                        inputValue={this.state.inputValue}
                        onSuggestionValueChange={this.handleChange}
                        isTextArea={this.state.isTextArea}
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
)(EditorSuggestion);
