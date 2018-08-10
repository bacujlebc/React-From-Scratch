import React, { Component } from "react";
import classnames from "classnames";

import UserSuggestionItem from "./UserSuggestionItem";
import UserSuggestionListHOC from "../../HOC/UserSuggestionListHOC";

class UserSuggestionList extends Component {
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
        const { articleList } = this.props;
        return (
            <div
                className={classnames(
                    "d-flex flex-column justify-content-center"
                )}
            >
                {articleList.length > 0 &&
                    articleList.map((el, i) => (
                        <UserSuggestionItem
                            originalText={this.state[el.id] || el.originalText}
                            key={el.id}
                            removeHandler={_ => this.props.deleteArticle(i)}
                            approveNewTitle={e => console.log(title)}
                            handleChange={data =>
                                this.onHandleChange(el.id, data)
                            }
                            like={_ => this.props.like(el.id)}
                            likes={el.likes}
                        />
                    ))}

                <div className="">
                    <button
                        className="btn btn-success"
                        onClick={_ => this.props.addArticle()}
                    >
                        Add article
                    </button>
                </div>
            </div>
        );
    }
}

export default UserSuggestionListHOC(UserSuggestionList);
