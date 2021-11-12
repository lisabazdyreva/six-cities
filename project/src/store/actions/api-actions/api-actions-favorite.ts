import {FavoriteData} from '../../../types/favorite-data';
import {ThunkActionResult} from '../../../types/action';
import {adaptToClient} from '../../../utils/adapt-utils';
import {setFavoriteOffers, updateNearby, updateOffer, updateRoom} from '../action';
import {AuthorizationStatus, CardTypes, WarningMessage} from '../../../const';
import {toast} from 'react-toastify';


function postFavorite({id, status, cardType}: FavoriteData): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    await api.post( `/favorite/${id}/${status}`)
      .then(({data}) => adaptToClient([data]))
      .then(() => {
        dispatch(updateOffer(id));
        if (cardType === CardTypes.Offer) {
          dispatch(updateRoom(id));
        }
        if (cardType === CardTypes.Nearby) {
          dispatch(updateNearby(id));
        }

      })
      .catch(() => toast.warning(WarningMessage.PostFavorite));
  };
}

function fetchFavoriteOffers(authorizationStatus: AuthorizationStatus | null): ThunkActionResult {
  return async (dispatch, _getState, api): Promise<void> => {
    await api.get('/favorite')
      .then(({data}) => adaptToClient(data))
      .then((data) => dispatch(setFavoriteOffers(data)))
      .catch(() => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          toast.warning(WarningMessage.FetchFavorite);
        }
      });
  };
}

export {postFavorite, fetchFavoriteOffers};
