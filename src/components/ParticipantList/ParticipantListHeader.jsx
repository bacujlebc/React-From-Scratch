import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export const ParticipantListHeader = (props) => {
    return (
        <div className={classnames(`participant-list-wrapper d-none d-lg-block`)}>
            <div className={classnames(`participant-list-item participant-list-item-head row m-0 align-items-center`)}>
                <div className={classnames(`col-3 col-sm-2 col-md-2 d-block d-lg-none text-nowrap bold`)}>Naam</div>
                <div className={classnames(`col-7 col-sm-7 col-md-7 col-lg-3 text-left text-md-left `)}>Naam</div>

                <div className={classnames(`col-3 col-sm-2 col-md-2 d-block d-lg-none text-nowrap bold`)}>Email</div>
                <div className={classnames(`col-9 col-sm-10 col-md-10 col-lg-5 text-left text-md-left text-trancate`)}>Email</div>

                <div className={classnames(`col-3 col-sm-2 col-md-2 d-block d-lg-none text-nowrap bold`)}>Tel</div>
                <div className={classnames(`col-9 col-sm-10 col-md-10 col-lg-2 text-left  text-md-left`)}>Telefoonnummer</div>
            </div>
        </div>
    )
}