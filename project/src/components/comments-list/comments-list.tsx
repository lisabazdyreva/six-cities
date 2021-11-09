import CommentMessage from '../comment-message/comment-message';
import {Reviews} from '../../types/review';

import {getFetchStatusComments} from '../../store/app-data/selectors';
import {useSelector} from 'react-redux';
import {FetchStatus} from '../../const';


type CommentsListProps = {
  commentsList: Reviews,
}


function CommentsList({commentsList}: CommentsListProps):JSX.Element {
  const fetchStatus = useSelector(getFetchStatusComments);

  if (fetchStatus === FetchStatus.Error) {
    return <span>Comments did not found. Try later</span>;
  }
  return (
    <ul className="reviews__list">
      {
        commentsList.map((commentItem) => (
          <CommentMessage
            commentItem={commentItem}
            key={new Date().getTime() + commentItem.id}
          />
        ))
      }
    </ul>
  );
}

export default CommentsList;

