import {CardTypes, SortTypes} from '../const';

import {Offers} from '../types/offer';
import {Reviews} from '../types/review';


const formatType = (typeText: string): string => {
  const result = typeText.slice(0, 1).toUpperCase() + typeText.slice(1);

  if (typeText === 'room') {
    return `Private ${result}`;
  }
  return result;
};

const getRatingPercentValue = (rating: number): string => `${(Math.round(rating)) * 100 / 5}%`;

const isMainPage = (type: string): boolean => type === CardTypes.Main;

const filterOffers = (activeCity: string, offers: Offers): Offers => offers.filter((offer) => offer.city.name === activeCity);


const formatDateValue = (value: string): string => new Date(value).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
const formatDateAttr = (value: string): string => value.slice(0, 10);


const getFavoriteCitiesList = (cards: Offers): string[] => Array.from(new Set(cards.reduce((prev, current) => `${prev} ${current.city.name}`, '').trim().split(' ')));

const getSortedOffers = (type: string, cards: Offers): Offers => {
  switch (type) {
    case (SortTypes.Popular):
      return cards.slice().sort((cardA, cardB) => {
        const numberIdA = Number(cardA.id);
        const numberIdB = Number(cardB.id);

        return numberIdB - numberIdA; // TODO пока так
      });
    case (SortTypes.IncrementPrice):
      return cards.slice().sort((cardA, cardB) => cardA.price - cardB.price);
    case (SortTypes.DecrementPrice):
      return cards.slice().sort((cardA, cardB) => cardB.price - cardA.price);
    case (SortTypes.Rating):
      return cards.slice().sort((cardA, cardB) => cardB.rating - cardA.rating);
    default:
      return cards.slice();
  }
};

const getSortedComments = (comments: Reviews) => comments.slice().sort((commentA, commentB) => {
  const firstDate = new Date(commentA.date);
  const secondDate = new Date(commentB.date);

  return Number(secondDate) - Number(firstDate);
});


type FavoriteCardsByCities = {
  [propertyName: string] : Offers,
}[];

const getFavoriteCardsByCities = (cards: Offers): FavoriteCardsByCities =>  {
  const favoriteCities = getFavoriteCitiesList(cards);
  return favoriteCities.map((city) => Object.assign({}, {[city]: cards.filter((card) => card.city.name === city)}));
};

const getNoOffersMessage = (city: string) => {
  return `We could not find any property available at the moment in ${city}`;
};

export {
  formatType,
  getRatingPercentValue,
  isMainPage,
  filterOffers,
  formatDateValue,
  formatDateAttr,
  getFavoriteCitiesList,
  getSortedOffers,
  getSortedComments,
  getFavoriteCardsByCities,
  getNoOffersMessage
};
