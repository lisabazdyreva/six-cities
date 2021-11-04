export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    'avatar_url'?: string,
    id: number,
    'is_pro'?: boolean,
    isPro: boolean,
    name: string,
  },
};

export type ReviewServer = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    'avatar_url': string,
    'is_pro': boolean,
    id: number,
    name: string,
  },
}

export type Reviews = Review[];
export type ReviewsServer = ReviewServer[];
