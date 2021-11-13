import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {AppRoute, DEFAULT_ID} from '../../const';

import {setActiveId} from '../../store/actions/action';


function Logo():JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main} onClick={() => dispatch(setActiveId(DEFAULT_ID))}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export {Logo};
export default {Logo};
