import {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';

import CommentsList from '../comments-list/comments-list';
import CommentForm from '../comment-form/comment-form';

import {AuthorizationStatus} from '../../const';
import {ThunkAppDispatch} from '../../types/action';
import {fetchOfferComments} from '../../store/actions/api-actions';
import {getId} from '../../store/app-process/selectors';
import {getAuthorizationStatus} from '../../store/app-user/selectors';
import {getCommentsList} from '../../store/app-data/selectors';


function mapStateToProps(state: State) {
  return ({
    id: getId(state),
    authorizationStatus: getAuthorizationStatus(state),
    commentsList: getCommentsList(state),
  });
}

function mapDispatchToProps(dispatch : ThunkAppDispatch) {
  return ({
    getData(id: number) {
      dispatch(fetchOfferComments(id));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function CommentsSection(props: PropsFromRedux): JSX.Element {
  const {id, authorizationStatus, commentsList, getData} = props;


  useEffect(() => {
    getData(id);
  }, [id]);


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsList.length}</span></h2>
      <CommentsList commentsList={commentsList}/>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm id={id} />}
    </section>
  );
}

export {CommentsSection};
export default connector(CommentsSection);
