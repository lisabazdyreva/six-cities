import {ThunkActionResult} from '../../../types/action';
import {setCommentsList, setFetchStatusComments} from '../action';
import {FetchStatus, WarningMessage} from '../../../const';
import {adaptCommentsToClient} from '../../../utils/adapt-utils';
import {CommentData} from '../../../types/comment-data';
import {toast} from 'react-toastify';


function fetchOfferComments(id: number): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFetchStatusComments(FetchStatus.Trying));
    await api.get(`/comments/${id}`)
      .then(({data}) => adaptCommentsToClient(data))
      .then((data) => dispatch(setCommentsList(data)))
      .then(() => setFetchStatusComments(FetchStatus.Ok))

      .catch(() => dispatch(setFetchStatusComments(FetchStatus.Error)));
  };
}

function postComment({id, comment, rating}: CommentData): ThunkActionResult {
  return async(dispatch, _getState, api): Promise<void> => {
    await api.post(`/comments/${id}`, {comment, rating})
      .then(({data}) => dispatch(setCommentsList(adaptCommentsToClient(data))))
      .catch(() => toast.warning(WarningMessage.PostComment));
  };
}

export {fetchOfferComments, postComment};
