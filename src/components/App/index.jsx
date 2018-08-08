import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";
import "../../helpers.scss";
import UserSuggestionList from "../../containers/UserSuggestionList";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header />
                <div className={classnames(`container m-t-20`)}>
                    <UserSuggestionList />
                </div>
                <footer />
            </React.Fragment>
        );
    }
}
