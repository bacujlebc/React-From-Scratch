import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { NavLink, Link, Route, Switch } from "react-router-dom";

import UserSuggestionList from "../../containers/UserSuggestionList";
import "../../helpers.scss";
import UserListWrapper from "../../containers/UserListWrapper";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <nav
                    className={classnames(
                        "navbar navbar-light justify-content-center"
                    )}
                >
                    <ul className={classnames("flex-row nav navbar-nav")}>
                        <li className={classnames("m-r-10")}>
                            <NavLink
                                activeClassName={classnames(`text-success`)}
                                to="/userPage"
                            >
                                User Page
                            </NavLink>
                        </li>
                        <li className={classnames("m-r-10")}>
                            <NavLink
                                activeClassName={classnames(`text-success`)}
                                to="/editorPage"
                            >
                                Editor Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={classnames(`text-success`)}
                                to="/testPage"
                            >
                                Test Page
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className={classnames(`container m-t-20`)}>
                    <Switch>
                        <Route exact path="/" component={UserSuggestionList} />
                        <Route
                            path="/userPage"
                            component={UserSuggestionList}
                        />
                        <Route
                            path="/editorPage"
                            component={UserSuggestionList}
                            // EditorSuggestionList
                        />
                        <Route path="/testPage" component={UserListWrapper} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}
