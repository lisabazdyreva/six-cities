import {Locations} from '../../const';
import {offers} from '../../mocks/offers';

import {State} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

//пока здесь полежит
const INITIAL_CITY = Object.keys(Locations)[0]; // здесь должен быть в итоге Париж
const OFFERS = offers.filter((offer) => offer.city.name === INITIAL_CITY);


const initialState = {
  city: INITIAL_CITY,
  offers: OFFERS,
};

function reducer (state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.FillOffersList:
      return {...state, offers: action.payload};
    default:
      return state;
  }
}

export {reducer};
