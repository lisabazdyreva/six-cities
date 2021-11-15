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
  Hotels = '/hotels',
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
  Nearby = 'Nearby',
  Favorite = 'Favorite',
}


export enum SortTypes {
  Popular = 'Popular',
  IncrementPrice = 'Price: low to high',
  DecrementPrice = 'Price: high to low',
  Rating = 'Top rated first',
}

export const sortTypesList = Object.values(SortTypes);

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


export const DefaultValue = {
  City: Locations.Paris,
  Login: '',
  SortType: SortTypes.Popular,
  Id: 0,
} as const;

export const DEFAULT_CURRENT_OFFER = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: DefaultValue.City,
  },
  description: '',
  goods: [''],
  host: {
    avatarUrl: '',
    id: DefaultValue.Id,
    isPro: false,
    name: '',
  },
  id: DefaultValue.Id,
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
  Perfect = 'perfect',
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

export const enum WarningMessage {
  FetchFavorite = 'Sorry we could not show your favorites right now. Please try later.',
  PostFavorite = 'Sorry we could not add the offer to favorite right now. Please try later.',
  PostComment = 'Sorry we could not post your comment right now. Please try later.',
  CheckAuthorization = 'Please login to get access to all functionality of the app',
}

export const enum CommentLength {
  MaxLength = 300,
  MinLength= 50,
  ListLength = 10,
}

export const enum ErrorMessage {
  Comments = 'Comments did not found. Try later',
  NoOffers = 'Sorry, server is not respond right now.',
  NoOffersInCity = 'We could not find any property available at the moment in',
  PasswordInput = 'The password must be at least 1 letter and 1 number.',
  Nearby = 'Nothing found. Try later.',
  NoFavorites = 'There are no favorite offers. Add some offers to favorite.',
}

export const REG_EXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Za-z])[0-9A-Za-z]{2,}/;

export const APISetting = {
  BaseURL: 'https://8.react.pages.academy/six-cities',
  Timeout: 5000,
} as const;

export const enum TextMessage {
  SignIn = 'Sign in',
  SignOut = 'Sign out',
  HomePage = 'Back to home page',
  NotFound = '404. Page not found.',
}
