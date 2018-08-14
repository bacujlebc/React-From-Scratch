import React, { Component } from "react";

export default class CardInputWrapper extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={_ => console.log("library opened")}>
                    open library
                </button>
            </React.Fragment>
        );
    }
}
