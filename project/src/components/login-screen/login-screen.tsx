import {Link} from 'react-router-dom';

import Icons from '../icons/icons';
import Logo from '../logo/logo';
import LoginScreenForm from '../login-screen-form/login-screen-form';

import {AppRoute} from '../../const';
import {useSelector} from 'react-redux';
import {getSelectedCity} from '../../store/app-process/selectors';


function LoginScreen(): JSX.Element {
  const selectedCity = useSelector(getSelectedCity);
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
                  <span>{selectedCity}</span>
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
export default LoginScreen;
