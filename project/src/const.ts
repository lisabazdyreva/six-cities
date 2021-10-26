import {PointExpression} from 'leaflet';
import {CSSProperties} from 'react';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomID = '/offer/:id',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


// для моков, потом удалить
const Users = {
  Angelina: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  Default: {
    avatarUrl: 'img/avatar.svg',
    id: 1,
    isPro: false,
    name: 'None',
  },
  Max: {
    avatarUrl: 'img/avatar-max.jpg' ,
    id: 2,
    isPro: false,
    name: 'Max',
  },
} as const;


// пока так
const Locations = {
  Paris: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 10,
  },
  Cologne: {
    latitude: 50.935173,
    longitude: 6.953101,
    zoom: 10,
  },
  Brussels: {
    latitude: 50.8503396,
    longitude: 4.3517103,
    zoom: 10,
  },
  Amsterdam: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  Hamburg: {
    latitude: 53.551086,
    longitude: 9.993682,
    zoom: 10,
  },
  Dusseldorf: {
    latitude: 51.233334,
    longitude: 6.783333,
    zoom: 10,
  },
} as const;
// пока так
const citiesList = Object.keys(Locations);


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


export {Locations, Users, citiesList};
