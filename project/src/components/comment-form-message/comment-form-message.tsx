import {ChangeEvent, memo} from 'react';
import {CommentLength} from '../../const';


type CommentFormMessageProps = {
  comment: string;
  handleMessage: (evt:ChangeEvent<HTMLTextAreaElement>) => void;
};


function CommentFormMessage({handleMessage, comment}: CommentFormMessageProps): JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleMessage}
      value={comment}
      minLength={CommentLength.MinLength}
      maxLength={CommentLength.MaxLength}
    />
  );
}

export default memo(CommentFormMessage);
