import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import type {Actions} from '../../types/action';

import {setActiveId} from '../../store/actions/action';

import {AppRoute, DEFAULT_ID} from '../../const';


function mapDispatchToProps (dispatch: Dispatch<Actions>) {
  return({
    onResetId(){
      dispatch(setActiveId(DEFAULT_ID));
    },
  });
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Logo({onResetId}: PropsFromRedux):JSX.Element {
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main} onClick={onResetId}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export {Logo};
export default connector(Logo);
