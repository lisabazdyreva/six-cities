import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import classNames from 'classnames';

import type {Offers} from '../../types/offer';
import type {State} from '../../types/state';
import type {Actions} from '../../types/action';

import Card from '../card/card';

import {setActiveId} from '../../store/actions/action';

import {isMainPage} from '../../utils';


function mapStateToProps({id}: State) {
  return({
    currentId: id,
  });
}

function mapDispatchToProps (dispatch: Dispatch<Actions>) {
  return({
    onCardHover(id: number) {
      dispatch(setActiveId(id));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type CardsListProps = {
  cards: Offers;
  type: string;
}
type ConnectedComponentProps = CardsListProps & PropsFromRedux;


function CardsList({cards, type, onCardHover}: ConnectedComponentProps): JSX.Element {
  return (
    <div
      className={classNames(
        'places__list',
        {'cities__places-list tabs__content': isMainPage(type)},
        {'near-places__list': !isMainPage(type)})}
    >
      {
        cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            typeCard={type}
            onCardHover={ isMainPage(type)
              ? (id) => onCardHover(id)
              : null}
          />
        ))
      }
    </div>

  );
}

export {CardsList};
export default connector(CardsList);
