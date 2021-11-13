import {Reviews} from '../types/review';
import {FavoriteCardsByCities} from '../types/favorite-cards-by-cities';
import {Offers} from '../types/offer';
import {SortTypes} from '../const';


const filterOffers = (activeCity: string, offers: Offers): Offers => offers.filter((offer) => offer.city.name === activeCity);

const sortOffers = (type: string, cards: Offers): Offers => {
  switch (type) {
    case (SortTypes.Popular):
      return cards.slice().sort((cardA, cardB) => {
        const idA = Number(cardA.id);
        const idB = Number(cardB.id);

        return idB - idA;
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

const getSortedComments = (comments: Reviews): Reviews => comments.slice().sort((commentA, commentB) => {
  const firstDate = new Date(commentA.date);
  const secondDate = new Date(commentB.date);

  return Number(secondDate) - Number(firstDate);
});


const getFavoriteCardsByCities = (cards: Offers): FavoriteCardsByCities =>  {
  const getFavoriteCitiesList = (): string[] => Array.from(new Set(cards.reduce((prev, current) => `${prev} ${current.city.name}`, '').trim().split(' ')));

  const favoriteCities = getFavoriteCitiesList();
  return favoriteCities.map((city) => Object.assign({}, {[city]: cards.filter((card) => card.city.name === city)}));
};


export {filterOffers, sortOffers, getSortedComments, getFavoriteCardsByCities};
