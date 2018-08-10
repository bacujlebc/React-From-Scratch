import React, { Component } from "react";
import "./index.scss";

const UserSuggestionListHOC = WrappedComponent => {
    return class extends Component {
        state = {
            isDataReceived: false
        };

        componentWillReceiveProps(nextProps) {
            nextProps.articleList.length > 0 &&
                this.setState({
                    isDataReceived: !this.setState.isDataReceived
                });
        }

        render() {
            return this.state.isDataReceived ||
                (this.props.articles && this.props.articles.length > 0) ? (
                <WrappedComponent {...this.props} />
            ) : (
                <div class="lds-roller">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            );
        }
    };
};

export default UserSuggestionListHOC;
