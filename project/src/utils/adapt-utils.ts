import {Offer, Offers, OffersServer} from '../types/offer';
import {Review, Reviews, ReviewsServer} from '../types/review';

const adaptToClient = (items: OffersServer): Offers => items.map((item): Offer => {
  const adaptedOffer: Offer = Object.assign(
    {},
    item,
    {
      isFavorite: item.is_favorite,
      isPremium: item.is_premium,
      maxAdults: item.max_adults,
      previewImage: item.preview_image,
      host: Object.assign({}, item.host, {isPro: item.host.is_pro, avatarUrl: item.host.avatar_url}),
    },
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
});


const adaptCommentsToClient = (items: ReviewsServer): Reviews => items.map((item): Review => {
  const adaptedComment: Review = Object.assign(
    {},
    item,
    {
      user: Object.assign({}, item.user, {isPro: item.user.is_pro, avatarUrl: item.user.avatar_url}),
    },
  );

  delete adaptedComment.user.is_pro;
  delete adaptedComment.user.avatar_url;

  return adaptedComment;
});


export {adaptToClient, adaptCommentsToClient};
