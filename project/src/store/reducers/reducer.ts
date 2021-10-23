import {State} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

import {offers} from '../../mocks/offers';

//пока здесь полежит
const INITIAL_CITY = 'Paris'; // здесь должен быть в итоге Париж
const OFFERS = offers.filter((offer) => offer.city.name === INITIAL_CITY);

//eslint-disable-next-line
console.log(OFFERS);
const initialState = {
  selectedCity: INITIAL_CITY,
  offers: OFFERS,
};

function reducer (state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.SelectActiveCity:
      return {...state, selectedCity: action.payload};
    case ActionType.FillOffersList:
      return {...state, offers: action.payload};
    default:
      return state;
  }
}

export {reducer};
