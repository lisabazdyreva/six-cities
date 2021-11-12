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
  const id = useSelector(getId);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const commentsList = useSelector(getCommentsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferComments(id));
  }, [id]);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>
      <CommentsList commentsList={commentsList}/>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm id={id} />}
    </section>
  );
}

export {CommentsSection};
export default CommentsSection;
