import PropTypes from "prop-types";
import React, { Component } from "react";
import UserSuggestionItem from "./UserSuggestionItem";
import UserSuggestionListHOC from "../../HOC/UserSuggestionListHOC";

class UserSuggestionList extends Component {
    static propTypes = {
        articleList: PropTypes.arrayOf(
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
        likeArticle: PropTypes.func.isRequired
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
        const {
            articleList,
            addArticle,
            deleteArticle,
            approveNewTitle,
            likeArticle
        } = this.props;

        return (
            <div className="d-flex flex-column justify-content-center">
                {articleList.length > 0 &&
                    articleList.map(el => (
                        <UserSuggestionItem
                            key={el.id}
                            likeArticle={likeArticle}
                            removeHandler={deleteArticle}
                            approveNewTitle={approveNewTitle}
                            handleChange={data =>
                                this.onHandleChange(el.id, data)
                            }
                            element={el}
                            likes={el.likes}
                            originalText={this.state[el.id] || el.originalText}
                        />
                    ))}

                <button className="btn btn-success" onClick={addArticle}>
                    Add article
                </button>
            </div>
        );
    }
}

export default UserSuggestionListHOC(UserSuggestionList);
