import {ChangeEvent, memo} from 'react';
import {CommentLength} from '../../const';


type CommentFormMessageProps = {
  comment: string;
  onMessageInput: (evt:ChangeEvent<HTMLTextAreaElement>) => void;
};


function CommentFormMessage({onMessageInput, comment}: CommentFormMessageProps): JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={onMessageInput}
      value={comment}
      minLength={CommentLength.MinLength}
      maxLength={CommentLength.MaxLength}
    />
  );
}

export default memo(CommentFormMessage);
