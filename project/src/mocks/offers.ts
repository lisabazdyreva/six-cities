import type {Offers} from '../types/offer';

const AVATAR_IMG_ANGELINA = 'img/avatar-angelina.jpg';
const AVATAR_IMG_MAX = 'img/avatar-max.jpg';
const AVATAR_DEFAULT = 'img/avatar.svg';

export const offers: Offers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': AVATAR_IMG_ANGELINA,
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    // 'id': new Date().getTime(),
    'id': 1,
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },


  {
    'bedrooms': 1,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Cologne',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    'goods': ['Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': AVATAR_IMG_ANGELINA,
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    // 'id': new Date().getTime(),
    'id': 2,
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 2,
    'previewImage': 'img/apartment-02.jpg',
    'price': 80,
    'rating': 4.1,
    'title': 'Beautiful studio at great location',
    'type': 'apartment',
  },


  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Cologne',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    'goods': ['Coffee machine'],
    'host': {
      'avatarUrl': AVATAR_IMG_MAX,
      'id': 2,
      'isPro': true,
      'name': 'Max',
    },
    // 'id': new Date().getTime(),
    'id': 3,
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 2,
    'previewImage': 'img/apartment-03.jpg',
    'price': 500,
    'rating': 1.2,
    'title': 'Beautiful studio at great location',
    'type': 'private room',
  },

  {
    'bedrooms': 5,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Brussels',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    'goods': ['Coffee machine'],
    'host': {
      'avatarUrl': AVATAR_DEFAULT,
      'id': 1,
      'isPro': false,
      'name': 'None',
    },
    // 'id': new Date().getTime(),
    'id': 4,
    'images': ['img/1.png', 'img/2.png'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 2,
    'previewImage': 'img/apartment-01.jpg',
    'price': 10000,
    'rating': 3.6,
    'title': 'Beautiful studio at great location',
    'type': 'apartment',
  },
];
