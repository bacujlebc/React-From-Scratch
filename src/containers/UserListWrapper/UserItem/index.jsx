import React, { PureComponent, Fragment } from "react";
import "./styles.scss";

export const UserItem = props => {
    return (
        <Fragment>
            <li>
                <div>{props.firstName}</div>
                <div>{props.lastName}</div>
                <div>{props.email}</div>
                <div>{props.telephone}</div>
            </li>
        </Fragment>
    );
};
