import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserSuggestionList from './UserSuggestionList';
import Topic from './Topic';
import {
  getArticles,
  addArticle,
  deleteArticle,
  like
} from '../../actions/articles';

class UserSuggestionMain extends Component {
  static propTypes = {
    fetchArticles: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        originalText: PropTypes.string,
        suggestions: PropTypes.array,
        isApproved: PropTypes.bool,
        likes: PropTypes.number
      })
    ),
    match: PropTypes.shape()
  };

  componentDidMount() {
    const { fetchArticles, articles } = this.props;
    debugger;
    if (articles.length === 0) {
      setTimeout(() => {
        fetchArticles();
      }, 2000);
    }
  }

  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <UserSuggestionList {...this.props} />

        <Route path={`${match.url}/:topicId`} component={Topic} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  fetchArticles: _ => dispatch(getArticles()),

  addArticle: _ => dispatch(addArticle()),

  deleteArticle: index => dispatch(deleteArticle(index)),

  likeArticle: id => dispatch(like(id)),

  openArticle: id => dispatch(push(`/${id}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSuggestionMain);
