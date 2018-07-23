import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import './styles.scss';
import { ParticipantListHeader } from './ParticipantListHeader';
import { ParticipantListItem } from './ParticipantListItem';
import { fetchParticipantList } from '../../api/participant-service';

export default class ParticipantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            participantList: [],
            firstName: "",
            lastName: "",
            temperature: 0
        }
    }

    componentWillMount() {
        fetchParticipantList()
            .then(participants => {
                participants.length > 0 && this.setState({ participantList: [...participants] });
            })
            .catch( error => console.error(error) )
    }

    handleFileUpload = (event) => {
        const file = event.target.files[0];
        // loggin file
    }

    handlerChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    parentHandler = (value) => {
        console.log(value, " Test component value");
        this.setState({ temperature: parseInt(value) });
    }

    render() {
        console.log(this.state.temperature);
        return (
            <div className={classnames(`participant-list-header-wrapper d-flex flex-column justify-content-center m-t-20`)}>
                <ParticipantListHeader />
                <div>
                    {
                        this.state.participantList.length > 0 ?
                            (this.state.participantList.map(participant =>
                                <ParticipantListItem key={participant.id} {...participant} />
                            )) :
                            (
                                <h2 className={classnames(`no-participants`)}>There are no participants.</h2>
                            )
                    }
                </div>
                <form action="">
                    <label htmlFor="Choose a file"></label>
                    <input type="file" onChange={ this.handleFileUpload }/>

                    <label htmlFor="">First name</label>
                    <input name="firstName" type="text" value={ this.state.firstName } onChange={ this.handlerChange }/>

                    <label htmlFor="">Last name</label>
                    <input name="lastName" type="text" value={ this.state.lastName } onChange={ this.handlerChange }/>
                </form>
            </div>
        )
    }
}