import {SyntheticEvent, useRef} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import {ThunkAppDispatch} from '../../types/action';

import Icons from '../icons/icons';
import Logo from '../logo/logo';

import {AppRoute} from '../../const';
import {loginAction} from '../../store/actions/api-actions';
import {AuthorizationData} from '../../types/authorization-data';


function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return ({
    onSubmit(authorizationData: AuthorizationData) {
      dispatch(loginAction(authorizationData));
    },
  });
}
const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginScreen({onSubmit}: PropsFromRedux): JSX.Element {
  const history = useHistory();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      if (loginRef.current.value && passwordRef.current.value) {
        history.push(AppRoute.Main);
      }
    }
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
              <form className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={loginRef}
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <button className="login__submit form__submit button" type="submit" onClick={handleSubmit} disabled>Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>Amsterdam</span>
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
