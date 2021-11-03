import {connect, ConnectedProps} from 'react-redux';

import CommentMessage from '../comment-message/comment-message';
import {State} from '../../types/state';

import {ThunkAppDispatch} from '../../types/action';
import {fetchOfferComments} from '../../store/actions/api-actions';
import {useEffect} from 'react';

function mapStateToProps ({commentsList, id}: State) {
  return ({
    commentsList,
    id,
  });
}

function mapDispatchToProps (dispatch : ThunkAppDispatch) {
  return ({
    getData(id: number) {
      dispatch(fetchOfferComments(id));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CommentsList({commentsList, getData, id}: PropsFromRedux):JSX.Element {

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <ul className="reviews__list">
      {commentsList.map((commentItem) => <CommentMessage commentItem={commentItem} key={new Date().getTime() + commentItem.id} />)}
    </ul>
  );
}

export {CommentsList};
export default connector(CommentsList);
