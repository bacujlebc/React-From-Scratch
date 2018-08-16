import React, { Component, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import lodash from 'lodash';

import '../../helpers.scss';
import './UserSuggestionItem.scss';
import UserSuggestionInput from './UserSuggestionInput';

const UserSuggestionItem = props => {
    let numberOfLikes = props.likes ? ` ${props.likes}` : null;
    const {
        removeHandler,
        likeArticle,
        originalText,
        element,
        match,
        openArticle
    } = props;

    const img_src =
        'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200';

    return (
        // <div className={classnames(`card m-b-10`)}>
        //     <div className={classnames(`card-body`)}>
        //         <div className="d-flex align-items-center justify-content-between">
        //             <h6 className={classnames(`card-title mb-2 text-muted`)}>
        //                 Original text
        //             </h6>
        //             <button
        //                 type="button"
        //                 className={classnames(`btn btn-danger`)}
        //                 onClick={removeHandler}
        //             >
        //                 Remove
        //             </button>
        //         </div>

        //         <p className={classnames(`card-text`)}>{originalText}</p>
        //         <h6 className={classnames(`card-title mb-2 text-muted`)}>
        //             Users version
        //         </h6>
        //         <UserSuggestionInput {...props} />
        //         <div className="d-flex align-items-center justify-content-between">
        //             <i
        //                 className="fas fa-heart"
        //                 className={classnames("fas fa-heart", {
        //                     red: props.likes
        //                 })}
        //                 onClick={_ => likeArticle(element.id)}
        //             >
        //                 {numberOfLikes}
        //             </i>

        //             <button
        //                 type="button"
        //                 className={classnames(
        //                     `btn btn-primary float-right m-t-20`
        //                 )}
        //             >
        //                 Send
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className="card">
            <img className="card-img-top" src={img_src} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Rome</h5>
                <h6 className="card-subtitle">ITALY, The capital city</h6>
                <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                </p>
                <div className="card-body-action-group">
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                        <i
                            className="fas fa-heart"
                            className={classnames('fas fa-heart', {
                                liked: props.likes
                            })}
                            onClick={_ => likeArticle(element.id)}
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
