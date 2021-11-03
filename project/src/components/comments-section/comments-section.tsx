import {useState} from 'react';
import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';

function CommentsSection(): JSX.Element {
  const [commentsLength, setCommentsLength] = useState(0);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsLength}</span></h2>
      <CommentsList onCommentsCount={(length: number) => setCommentsLength(length)}/>
      <CommentForm />
    </section>
  );
}

export default CommentsSection;
