import React, { Component } from "react";

import UserSuggestionList from "../../containers/UserSuggestionList";
import "../../helpers.scss";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header />
                <div className="container m-t-20">
                    <UserSuggestionList />
                </div>
                <footer />
            </React.Fragment>
        );
    }
}
