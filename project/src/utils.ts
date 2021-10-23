import {CardTypes} from './const';
import {offers} from './mocks/offers';

const formatType = (typeText: string): string => {
  const result = typeText.slice(0, 1).toUpperCase() + typeText.slice(1);

  if (typeText === 'room') {
    return `Private ${result}`;
  }
  return result;
};

const getRatingPercentValue = (rating: number): string => `${(Math.round(rating)) * 100 / 5}%`;

const isMainPage = (type: string): boolean => type === CardTypes.Main;

const filterOffers = (activeCity: string) => offers.filter((offer) => offer.city.name === activeCity);

export {formatType, getRatingPercentValue, isMainPage, filterOffers};
