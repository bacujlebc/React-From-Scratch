import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Login from "../Login";
import App from "../App";
import Todo from "../Todo";

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
            <LogOut {...props} />
        </header>
    );
};

const LogOut = ({ loggedInAs, logout }) => {
    return (
        <React.Fragment>
            {loggedInAs ? (
                <React.Fragment>
                    <p>{loggedInAs}</p>
                    <button onClick={() => logout()}>logout</button>
                </React.Fragment>
            ) : (
                undefined
            )}
        </React.Fragment>
    );
};

export default Header;
