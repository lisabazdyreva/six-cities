import {useState} from 'react';

import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';

import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

function mapStateToProps({id, authorizationStatus}: State) {
  return ({
    id,
    authorizationStatus,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentsSection(props: PropsFromRedux): JSX.Element {
  const {id, authorizationStatus} = props;
  const [commentsLength, setCommentsLength] = useState(0);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsLength}</span></h2>
      <CommentsList onCommentsCount={(length: number) => setCommentsLength(length)}/>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm id={id} />}
    </section>
  );
}

export {CommentsSection};
export default connector(CommentsSection);
