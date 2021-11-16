import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';

import {AuthorizationStatus} from '../../const';

import {fetchOfferComments} from '../../store/actions/api-actions/api-actions-comments';
import {getId} from '../../store/app-process/selectors';

import {getAuthorizationStatus} from '../../store/app-user/selectors';
import {getCommentsList} from '../../store/app-data/selectors';


function CommentsSection(): JSX.Element {
  const dispatch = useDispatch();

  const id = useSelector(getId);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const commentsList = useSelector(getCommentsList);

  const commentsLength = commentsList.length;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    dispatch(fetchOfferComments(id));
  }, [id, dispatch]);


  return (
    <section className="property__reviews reviews">
      {commentsLength ?
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsLength}</span></h2> :
        <h2 className="reviews__title">No Reviews</h2>}

      {Boolean(commentsLength) && <CommentsList commentsList={commentsList}/>}

      {isAuth && <CommentForm id={id}/>}
    </section>
  );
}

export default CommentsSection;
