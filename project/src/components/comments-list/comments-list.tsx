import {useSelector} from 'react-redux';

import {Reviews} from '../../types/review';

import CommentMessage from '../comment-message/comment-message';

import {FetchStatus, CommentLength, ErrorMessage} from '../../const';
import {getSortedComments} from '../../utils/sort-utils';

import {getFetchStatusComments} from '../../store/app-status/selectors';


type CommentsListProps = {
  commentsList: Reviews;
};


function CommentsList({commentsList}: CommentsListProps):JSX.Element {
  const fetchStatus = useSelector(getFetchStatusComments);

  const getComments = (comments: Reviews) => getSortedComments(comments).slice(0, CommentLength.ListLength - 1);
  const comments = getComments(commentsList);

  const isFetchError = fetchStatus === FetchStatus.Error;


  if (isFetchError) {
    return <span>{ErrorMessage.Comments}</span>;
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

