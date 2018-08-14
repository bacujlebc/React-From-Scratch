import React, { Component } from "react";

import "./index.scss";
import WrappComponent from "../WrappComponent";
import UserSuggestionMain from "../../containers/UserSuggestion";
import Modal from "../Modal";
import TodoWrapper from "../Todo";
import CardInputWrapper from "../CardInput";
import Header from "../Header";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}

                <main className="container">
                    <UserSuggestionMain />
                    {/* <TodoWrapper /> */}
                </main>
                <footer />
            </React.Fragment>
        );
    }
}
