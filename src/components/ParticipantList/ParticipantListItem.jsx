import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export const ParticipantListItem = ({firstName, lastName, email, telephone}) => {
    return (
        <div className={classnames(`participant-list-item row m-0 align-items-center participant-list-wrapper additional-paddings`)}>
            <div className={classnames(`col-12 col-sm-12 col-md-12 col-lg-3 text-left text-md-left name`)}>{`${firstName} ${lastName}`}</div>


            <div className={classnames(`col-3 col-sm-2 col-md-2 d-block d-lg-none text-nowrap bold`)}>Email: </div>
            <div className={classnames(`col-9 col-sm-10 col-md-10 col-lg-5 text-left text-md-left text-trancate`)}>{email}</div>

            <div className={classnames(`col-3 col-sm-2 col-md-2 d-block d-lg-none text-nowrap bold`)}>Tel: </div>
            <div className={classnames(`col-9 col-sm-10 col-md-10 col-lg-2 text-left  text-md-left`)}>{telephone}</div>

            <div className={classnames(`col-12 col-sm-12 col-md-12 col-lg-2 d-block text-left text-sm-left text-md-left d-lg-none d-flex justify-content-start action-icons`)}>Actions</div>

            <div className={classnames(`col-12 col-sm-12 col-md-12 col-lg-2 d-none text-right text-md-right d-lg-flex justify-content-lg-center action-icons`)}>Actions</div>
        </div>
    )
}