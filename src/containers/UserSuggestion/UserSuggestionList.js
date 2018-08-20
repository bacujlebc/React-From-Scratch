import PropTypes from 'prop-types';
import React, { Component } from 'react';
import UserSuggestionItem from './UserSuggestionItem';
import UserSuggestionListHOC from '../../HOC/UserSuggestionListHOC';
import './UserSuggestionList.scss';
import Button from '../../components/Button/index';

class UserSuggestionList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        originalText: PropTypes.string,
        suggestions: PropTypes.array,
        isApproved: PropTypes.bool,
        likes: PropTypes.number
      })
    ),
    addArticle: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired,
    // approveNewTitle: PropTypes.func.isRequired,
    likeArticle: PropTypes.func.isRequired,
    match: PropTypes.shape(),
    img: PropTypes.shape()
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onHandleChange = (id, data) => {
    const stateClone = Object.assign({}, this.state);
    stateClone[id] = data;
    this.setState(stateClone);
  };

  render() {
    const { articles, addArticle, match } = this.props;
    return (
      <div className="d-flex flex-column justify-content-center">
        <Button
          name="Add article"
          className="btn btn-success add-article"
          onClick={addArticle}
        />

        {articles.length > 0 &&
          articles.map(el => (
            <UserSuggestionItem
              key={el.id}
              handleChange={data => this.onHandleChange(el.id, data)}
              element={el}
              likes={el.likes}
              img={el.img}
              match={match}
              {...this.props}
            />
          ))}
      </div>
    );
  }
}

export default UserSuggestionListHOC(UserSuggestionList);
