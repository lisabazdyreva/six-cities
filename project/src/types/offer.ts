export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type City = {
  location: Location,
  name: string,
};

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    'avatar_url'?: string,
    id: number,
    isPro: boolean,
    'is_pro'?: boolean,
    name: string,
  }
  id: number,
  images: string[],
  'is_favorite'?: boolean,
  isFavorite: boolean,
  'is_premium'?: boolean,
  isPremium: boolean,
  location: Location,
  'max_adults'?: number,
  maxAdults: number,
  'preview_image'?: string,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type OfferServer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string,
  }
  id: number,
  images: string[],
  'is_favorite': boolean,
  'is_premium': boolean,
  location: Location,
  'max_adults': number,
  'preview_image': string,
  price: number,
  rating: number,
  title: string,
  type: string,
};


export type Offers = Offer[];
export type OffersServer = OfferServer[];
