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
  let comments = commentsList;
  const COMMENTS_MAX_LENGTH = 10;

  if (fetchStatus === FetchStatus.Error) {
    return <span>Comments did not found. Try later</span>;
  }

  if (commentsList.length > 1) {
    comments = commentsList.slice().sort((a, b) => {
      const firstDate = new Date(a.date);
      const secondDate = new Date(b.date);

      return Number(secondDate) - Number(firstDate);
    });
    comments = comments.slice(0, COMMENTS_MAX_LENGTH - 1);
  }

  return (
    <ul className="reviews__list">
      {
        comments.map((commentItem) => (
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

