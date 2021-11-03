import {CardTypes, SortTypes} from './const';

import {Offers, OffersServer, Offer} from './types/offer';

import {Review, Reviews, ReviewsServer} from './types/review';

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

        return numberIdB - numberIdA; // пока так
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


const adaptToClient = (items: OffersServer): Offers => items.map((item): Offer => {
  const adaptedOffer: Offer = Object.assign(
    {},
    item,
    {
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      maxAdults: item.max_adults,
      previewImage: item.preview_image,
      host: Object.assign({}, item.host, {isPro: item.host.is_pro, avatarUrl: item.host.avatar_url}),
    },
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
});


const adaptCommentsToClient = (items: ReviewsServer): Reviews => items.map((item): Review => {
  const adaptedComment: Review = Object.assign(
    {},
    item,
    {
      user: Object.assign({}, item.user, {isPro: item.user.is_pro, avatarUrl: item.user.avatar_url}),
    },
  );

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
});

export {formatType, getRatingPercentValue, isMainPage, filterOffers, formatDateValue, formatDateAttr, getFavoriteCitiesList, getSortedOffers, adaptToClient, adaptCommentsToClient};
