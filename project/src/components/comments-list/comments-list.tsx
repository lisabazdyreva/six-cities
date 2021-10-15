import type {Reviews} from '../../types/review';
import CommentMessage from '../comment-message/comment-message';

type CommentsListProps = {
  reviews: Reviews;
};

function CommentsList({reviews}: CommentsListProps):JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <CommentMessage review={review} key={new Date().getTime() + review.id} />)}
    </ul>
  );
}

export default CommentsList;
