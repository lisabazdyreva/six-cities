import {CardTypes} from './const';
import {offers} from './mocks/offers';
import {Offers} from './types/offer';

const formatType = (typeText: string): string => {
  const result = typeText.slice(0, 1).toUpperCase() + typeText.slice(1);

  if (typeText === 'room') {
    return `Private ${result}`;
  }
  return result;
};

const getRatingPercentValue = (rating: number): string => `${(Math.round(rating)) * 100 / 5}%`;

const isMainPage = (type: string): boolean => type === CardTypes.Main;

const filterOffers = (activeCity: string): Offers => offers.filter((offer) => offer.city.name === activeCity);


const formatDateValue = (value: string): string => new Date(value).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});

const formatDateAttr = (value: string): string => value.slice(0, 10);


export {formatType, getRatingPercentValue, isMainPage, filterOffers, formatDateValue, formatDateAttr};
