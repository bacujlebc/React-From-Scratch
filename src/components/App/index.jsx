import React, { Component } from 'react';
import classnames from 'classnames';
import './index.scss'
import '../../helpers.scss';
import ParticipantList from '../ParticipantList';
import FilterableProductTable from '../../containers/FilterableProductTable';

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={classnames(`container`)}>
                {/* <h1>Root component</h1> */}
                {/* <ParticipantList /> */}
                <FilterableProductTable />
            </div>
        )
    }
}