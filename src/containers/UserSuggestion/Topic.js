import React, { Component } from 'react';

const Topic = ({ match }) => {
    return <h3>{match.params.topicId}</h3>;
};

export default Topic;
