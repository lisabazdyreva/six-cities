import {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';

import CommentMessage from '../comment-message/comment-message';

import {fetchOfferComments} from '../../store/actions/api-actions';


function mapStateToProps({commentsList, id}: State) {
  return ({
    commentsList,
    id,
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

type CommentsListProps = {
  onCommentsCount: (length: number) => void;
}
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CommentsListProps & PropsFromRedux;


function CommentsList({commentsList, getData, id, onCommentsCount}: ConnectedComponentProps ):JSX.Element {

  useEffect(() => {
    getData(id);
  }, [id]);

  onCommentsCount(commentsList.length);

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

export {CommentsList};
export default connector(CommentsList);
