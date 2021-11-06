import CommentMessage from '../comment-message/comment-message';
import {Reviews} from '../../types/review';


type CommentsListProps = {
  commentsList: Reviews,
}


function CommentsList({commentsList}: CommentsListProps  ):JSX.Element {
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

