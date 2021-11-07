import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import Icons from '../icons/icons';
import Logo from '../logo/logo';
import LoginScreenForm from '../login-screen-form/login-screen-form';

import {AppRoute, AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import {Dispatch} from 'redux';

import {redirectTo} from '../../store/actions/action';

function mapStateToProps({USER}: State) {
  return ({
    authorizationStatus: USER.authorizationStatus,
  });
}

function mapDispatchToProps (dispatch: Dispatch) {
  return ({
    onRedirect(url: AppRoute) {
      dispatch(redirectTo(url));
    },
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;


function LoginScreen({authorizationStatus, onRedirect}: PropsFromRedux): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    onRedirect(AppRoute.Main);
  }

  return (
    <>
      <Icons />
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo />
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginScreenForm />
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>Amsterdam</span> {/*TODO должен ли быть захордкожен город*/}
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export {LoginScreen};
export default connector(LoginScreen);

