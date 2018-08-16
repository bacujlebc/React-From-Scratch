import React, { PureComponent, Fragment } from 'react';
import { UserItem } from '../UserItem';
import './styles.scss';

export const UserList = props => {
    return (
        <Fragment>
            <ul className="user-list">
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <UserItem key={user.id} {...user} />
                    ))
                ) : (
                    <h4>Users not found</h4>
                )}
            </ul>
        </Fragment>
    );
};
