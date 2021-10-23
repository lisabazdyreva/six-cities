import React from 'react';

import {CardTypes} from '../../const';

import CardsList from '../cards-list/cards-list';

import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

function mapStateToProps({offers}: State) {
  return ({
    cards: offers,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type MainCardsList = PropsFromRedux;

function MainCardsList (props: MainCardsList): JSX.Element {
  const {cards} = props;
  return (
    <CardsList cards={cards} type={CardTypes.Main} />
  );
}

export {MainCardsList};
export default connector(MainCardsList);
