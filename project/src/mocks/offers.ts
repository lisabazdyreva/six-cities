import type {Offers} from '../types/offer';
import {Locations, Users} from '../const';

const Ids = {
  AMSTERDAM_APARTMENT: 111,
  COLOGNE_ROOM: 222,
  PARIS_HOUSE: 333,
  BRUSSELS_HOTEL: 444,
  DUSSELDORF_HOUSE: 555,
  HAMBURG_ROOM: 666,
  HAMBURG_HOTEL: 777,
} as const;

export const offers: Offers = [
  {
    bedrooms: 3,
    city: {
      location: Locations.Amsterdam,
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: Users.Angelina,
    id: Ids.AMSTERDAM_APARTMENT,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: Locations.Cologne,
      name: 'Cologne',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: ['Coffee machine', 'Dishwasher', 'Washer', 'WIFI', 'Conditioner', 'TV'],
    host: Users.Angelina,
    id: Ids.COLOGNE_ROOM,
    images: ['img/room.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/apartment-02.jpg',
    price: 80,
    rating: 4.1,
    title: 'Beautiful room at great location',
    type: 'room',
  },
  {
    bedrooms: 10,
    city: {
      location: Locations.Paris,
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: ['Coffee machine'],
    host: Users.Default,
    id: Ids.PARIS_HOUSE,
    images: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 15,
    previewImage: 'img/apartment-03.jpg',
    price: 500,
    rating: 1.2,
    title: 'Beautiful house at great location',
    type: 'house',
  },
  {
    bedrooms: 2,
    city: {
      location: Locations.Brussels,
      name: 'Brussels',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: ['Coffee machine', 'Heating', 'Breakfast', 'Dinner', 'Lunch', 'WiFi', 'Bar', 'Parking'],
    host: Users.Default,
    id: Ids.BRUSSELS_HOTEL,
    images: ['img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 10000,
    rating: 3.6,
    title: 'Beautiful hotel at great location',
    type: 'hotel',
  },
  {
    bedrooms: 5,
    city: {
      location: Locations.Dusseldorf,
      name: 'Dusseldorf',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Dusseldorf.',
    goods: ['WiFi', 'Bar', 'Parking'],
    host: Users.Default,
    id: Ids.DUSSELDORF_HOUSE,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 6000,
    rating: 2.8,
    title: 'Beautiful house at great location',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: Locations.Hamburg,
      name: 'Hamburg',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg.',
    goods: [],
    host: Users.Angelina,
    id: Ids.HAMBURG_ROOM,
    images: [],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 50,
    rating: 5,
    title: 'Beautiful room at great location',
    type: 'room',
  },
  {
    bedrooms: 3,
    city: {
      location: Locations.Hamburg,
      name: 'Hamburg',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg.',
    goods: ['WiFi'],
    host: Users.Angelina,
    id: Ids.HAMBURG_HOTEL,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 3000,
    rating: 4.4,
    title: 'Beautiful hotel at great location',
    type: 'hotel',
  },
];
