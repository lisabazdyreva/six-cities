import {PointExpression} from 'leaflet';
import {CSSProperties} from 'react';


export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomID = '/offer/:id',
}

export enum FetchStatus {
  Error = 'Error',
  Trying = 'Trying',
  Ok = 'Ok',
}

export enum APIRoute {
  Login = '/login',
  Hotels = '/hotls',
  Logout = '/logout',
}

export enum FavoriteStatus {
  AddToFavorite = 1,
  RemoveFromFavorite = 0,
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export enum Locations {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const citiesList = Object.values(Locations);


export enum IconsURL {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg',
}


interface IconParamsTypes {
  IconSize: PointExpression,
  IconAnchor: PointExpression,
}

export const IconsParams: IconParamsTypes = {
  IconSize: [27, 39],
  IconAnchor: [14, 39],
};


interface MapStylesPropertiesTypes {
  MainPage: CSSProperties,
  OfferPage: CSSProperties,
}

export const MapStylesProperties: MapStylesPropertiesTypes = {
  MainPage: {height: '100%'},
  OfferPage: {width: '1144px', height: '100%', margin: '0 auto'},
};


export enum CardTypes {
  Main = 'Main',
  Offer = 'Offer',
  Nearby = 'Nearby', // TODO оптимизировать нейминг
  Favorite = 'Favorite',
}


export enum SortTypes {
  Popular = 'Popular',
  IncrementPrice = 'Price: low to high',
  DecrementPrice = 'Price: high to low',
  Rating = 'Top rated first',
}


export const defaultIcon = {
  iconUrl: IconsURL.Default,
  iconSize: IconsParams.IconSize,
  iconAnchor: IconsParams.IconAnchor,
};

export const currentIcon = {
  iconUrl: IconsURL.Current,
  iconSize: IconsParams.IconSize,
  iconAnchor: IconsParams.IconAnchor,
};

export const INITIAL_CITY = Locations.Paris;

export const INITIAL_LOGIN= '';

export const DEFAULT_SORT_TYPE =  SortTypes.Popular;

export const DEFAULT_ID = 0;

export const DEFAULT_CURRENT_OFFER = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: INITIAL_CITY,
  },
  description: '',
  goods: [''],
  host: {
    avatarUrl: '',
    id: DEFAULT_ID,
    isPro: false,
    name: '',
  },
  id: DEFAULT_ID,
  images: [''],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults:0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
};

export const enum OfferRatingTitles {
  Perfect = 'rating',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly',
}

export const OfferRatingValues = {
  [OfferRatingTitles.Perfect] : 5,
  [OfferRatingTitles.Good]: 4,
  [OfferRatingTitles.NotBad]: 3,
  [OfferRatingTitles.Badly]: 2,
  [OfferRatingTitles.Terribly]: 1,
};
