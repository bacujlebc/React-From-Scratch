import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import '../../helpers.scss';
import './UserSuggestionItem.scss';
import Button from '../../components/Button/index';

const UserSuggestionItem = ({
	likes,
	likeArticle,
	element,
	match,
	img,
	openArticle
}) => {
	const numberOfLikes = likes ? ` ${likes}` : null;

	return (
		<div className="card">
			<img className="card-img-top" src={img} alt="" />
			<div className="card-body">
				<div className="text">
					<h5 className="card-title">Rome</h5>
					<h6 className="card-subtitle">ITALY, The capital city</h6>
					<p className="card-text">
						This is a longer card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer.
					</p>
				</div>

				<div className="card-body-action-group-wrapper">
					<div className="card-body-action-group-actions">
						<i
							className={classnames('fas fa-heart', {
								liked: likes
							})}
							onClick={() => likeArticle(element.id)}
							onKeyDown={() => {}}
							role="button"
							tabIndex={0}
						>
							{numberOfLikes}
						</i>

						<Link to={`${match.url}/${element.id}`}>
							<Button className="le-button" name="Read more" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserSuggestionItem;
