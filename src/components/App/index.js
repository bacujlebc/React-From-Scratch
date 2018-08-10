import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";
import "../../helpers.scss";
import ContactForm from "../common/ContactForm";
import WrappComponent from "./WrappComponent";

import UserSuggestionMain from "../../containers/UserSuggestion";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header />
                <div className={classnames(`container m-t-20`)}>
                    <UserSuggestionMain />

                    {/* <ContactForm onSubmit={e => this.handleSubmit(e)} /> */}
                    {/* <WrappComponent /> */}
                </div>
                <footer />
            </React.Fragment>
        );
    }
}
