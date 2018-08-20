import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import '../../helpers.scss';
import './UserSuggestionItem.scss';

const UserSuggestionItem = ({ likes, likeArticle, element, match, img }) => {
  const numberOfLikes = likes ? ` ${likes}` : null;

  return (
    <div className="card">
      <img className="card-img-top" src={img} alt="" />
      <div className="card-body">
        <h5 className="card-title">Rome</h5>
        <h6 className="card-subtitle">ITALY, The capital city</h6>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="card-body-action-group">
          <hr />
          <div className="d-flex justify-content-between align-items-center">
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

            {/* <button
                            type="button"
                            className={classnames(`btn`)}
                            onClick={() => openArticle(element.id)}
                        >
                            READ MORE
                        </button> */}
            <Link to={`${match.url}/${element.id}`}>READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSuggestionItem;
