import {ErrorMessage} from '../../const';

type FavoritesCardsListEmptyProps = {
  message: ErrorMessage;
};

function FavoritesCardsListEmpty ({message}: FavoritesCardsListEmptyProps): JSX.Element {
  return (
    <span>{message}</span>
  );
}

export default FavoritesCardsListEmpty;
