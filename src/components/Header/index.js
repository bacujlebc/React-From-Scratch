import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Login from "../Login";
import App from "../App";

const Header = props => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/login"> Login </Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/Login" component={Login} />
        </header>
    );
};

export default Header;
