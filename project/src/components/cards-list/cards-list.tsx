import classNames from 'classnames';
import {Dispatch} from 'redux';

import {isMainPage} from '../../utils';
import {Offers} from '../../types/offer';

import Card from '../card/card';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Actions} from '../../types/action';

import {setActiveId} from '../../store/actions/action';

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

type CardsListProps = {
  cards: Offers;
  type: string;
}
type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = CardsListProps & PropsFromRedux;


function CardsList({cards, type, currentId, onCardHover}: ConnectedComponentProps): JSX.Element {
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
      {currentId} {/* временно, чтобы eslint не ругался*/}
    </div>

  );
}

export {CardsList};
export default connector(CardsList);
