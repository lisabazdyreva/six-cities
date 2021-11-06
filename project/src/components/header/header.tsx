import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';

import Logo from '../logo/logo';

import {AppRoute, AuthorizationStatus} from '../../const';
import {ThunkAppDispatch} from '../../types/action';

import {logoutAction} from '../../store/actions/api-actions';


function mapStateToProps({USER}: State) {
  return ({
    authorizationStatus: USER.authorizationStatus,
    login: USER.login,
  });
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return({
    onLogout() {
      dispatch(logoutAction());
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function Header({authorizationStatus, login,  onLogout}: PropsFromRedux): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth ? (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper" />
                        <span className="header__user-name user__name">{login}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item" onClick={onLogout}>
                      <Link className="header__nav-link" to={AppRoute.Main}> {/*TODO возможно потом убрать, так как в тз нет перехода на страницу авторизации*/}
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"/>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>
                  </>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
