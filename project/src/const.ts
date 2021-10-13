enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  RoomID = '/offer/:id', // пока так оставила
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const Users = {
  ANGELINA: {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina',
  },
  DEFAULT: {
    'avatarUrl': 'img/avatar.svg',
    'id': 1,
    'isPro': false,
    'name': 'None',
  },
  MAX: {
    'avatarUrl': 'img/avatar-max.jpg' ,
    'id': 2,
    'isPro': false,
    'name': 'Max',
  },
};

const Locations = {
  AMSTERDAM: {
    'latitude': 52.370216,
    'longitude': 4.895168,
    'zoom': 10,
  },
  COLOGNE: {
    'latitude': 50.935173,
    'longitude': 6.953101,
    'zoom': 10,
  },
  PARIS: {
    'latitude': 48.864716,
    'longitude': 2.349014,
    'zoom': 10,
  },
  BRUSSELS: {
    'latitude': 50.8503396,
    'longitude': 4.3517103,
    'zoom': 10,
  },
  HAMBURG: {
    'latitude': 53.551086,
    'longitude': 9.993682,
    'zoom': 10,
  },
  DUSSELDORF: {
    'latitude': 51.233334,
    'longitude': 6.783333,
    'zoom': 10,
  },
};

export {AppRoute, AuthorizationStatus, Locations, Users};
