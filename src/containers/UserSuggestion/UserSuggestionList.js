import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
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
		img: PropTypes.shape(),
		openArticle: PropTypes.func.isRequired
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
			<Fragment>
				<Button
					name="ADD ARTICLE"
					className="me-button m-b-10"
					onClick={addArticle}
				/>

				<div className="d-flex flex-column justify-content-center align-items-center">
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
			</Fragment>
		);
	}
}

export default UserSuggestionListHOC(UserSuggestionList);
