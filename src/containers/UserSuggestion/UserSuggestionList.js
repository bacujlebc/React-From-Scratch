import PropTypes from 'prop-types';
import React, { Component } from 'react';
import UserSuggestionItem from './UserSuggestionItem';
import UserSuggestionListHOC from '../../HOC/UserSuggestionListHOC';
import './UserSuggestionList.scss';

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
        approveNewTitle: PropTypes.func.isRequired,
        likeArticle: PropTypes.func.isRequired,
        match: PropTypes.any
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
        let { articles, addArticle } = this.props;
        // !articleList.length && (articleList = []);

        return (
            <div className="d-flex flex-column justify-content-center">
                <button
                    className="btn btn-success add-article"
                    onClick={addArticle}
                >
                    Add article
                </button>

                {articles.length > 0 &&
                    articles.map(el => (
                        <UserSuggestionItem
                            key={el.id}
                            handleChange={data =>
                                this.onHandleChange(el.id, data)
                            }
                            element={el}
                            likes={el.likes}
                            originalText={this.state[el.id] || el.originalText}
                            {...this.props}
                        />
                    ))}
            </div>
        );
    }
}

export default UserSuggestionListHOC(UserSuggestionList);
