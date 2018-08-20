import React, { Component } from 'react';
import './index.scss';

const UserSuggestionListHOC = WrappedComponent => {
  return class extends Component {
    state = {
      isDataReceived: false
    };

    componentWillReceiveProps(nextProps) {
      debugger;
      if (nextProps.articles.length) {
        this.setState({
          isDataReceived: !this.setState.isDataReceived
        });
      }
    }

    render() {
      const { isDataReceived } = this.state;
      const { articles } = this.props;

      const toRender =
        isDataReceived || (articles && articles.length > 0) ? (
          <WrappedComponent {...this.props} />
        ) : (
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        );

      return <React.Fragment>{toRender}</React.Fragment>;
    }
  };
};

export default UserSuggestionListHOC;
