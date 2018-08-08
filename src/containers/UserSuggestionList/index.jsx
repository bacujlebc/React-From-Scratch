import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import "./styles.scss";
import { UserSuggestion } from "../../components/UserSuggestion";
import { getArticles, addArticle, deleteArticle } from "../../actions/articles";

class UserSuggestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: []
        };
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            articleList: [...nextProps.state.articles]
        });
    }

    onHandleChange = (id, data) => {
        const stateClone = Object.assign({}, this.state);
        stateClone[id] = data;
        this.setState(stateClone);
    };

    render() {
        const { articleList } = this.state;
        return (
            <div
                className={classnames(
                    "d-flex flex-column justify-content-center"
                )}
            >
                {articleList.length > 0 &&
                    articleList.map((el, i) => (
                        <UserSuggestion
                            originalText={this.state[el.id] || el.originalText}
                            key={el.id}
                            removeHandler={_ => this.props.deleteArticle(i)}
                            approveNewTitle={e => console.log(title)}
                            handleChange={data =>
                                this.onHandleChange(el.id, data)
                            }
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

const mapStateToProps = state => {
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: _ => dispatch(getArticles()),

        addArticle: _ => dispatch(addArticle()),

        deleteArticle: index => dispatch(deleteArticle(index)),

        approveNewTitle: title => dispatch(approveNewTitle(title))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSuggestionList);
