import {useSelector} from 'react-redux';

import {Reviews} from '../../types/review';

import CommentMessage from '../comment-message/comment-message';

import {FetchStatus, COMMENTS_MAX_LENGTH, ERROR_COMMENTS_MESSAGE} from '../../const';
import {getSortedComments} from '../../utils/utils';

import {getFetchStatusComments} from '../../store/app-data/selectors';


type CommentsListProps = {
  commentsList: Reviews;
};


function CommentsList({commentsList}: CommentsListProps):JSX.Element {

  const getComments = (comments: Reviews) => getSortedComments(comments).slice(0, COMMENTS_MAX_LENGTH - 1);
  const comments = getComments(commentsList);

  const fetchStatus = useSelector(getFetchStatusComments);
  const isFetchError = fetchStatus === FetchStatus.Error;


  if (isFetchError) {
    return <span>{ERROR_COMMENTS_MESSAGE}</span>;
  }

  return (
    <ul className="reviews__list">
      {
        comments.map((commentItem) => (
          <CommentMessage
            commentItem={commentItem}
            key={commentItem.id}
          />
        ))
      }
    </ul>
  );
}

export default CommentsList;

