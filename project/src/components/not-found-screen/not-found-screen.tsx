import {Link} from 'react-router-dom';
import Icons from '../icons/icons';
import {AppRoute, TextMessage} from '../../const';


function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Icons />
      <div className="page page--gray page--not-found">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.Main}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="page__main page__main--not-found" style={{textAlign: 'center'}}>
          <h1>{TextMessage.NotFound}</h1>
          <Link to={AppRoute.Main}>{TextMessage.HomePage}</Link>
        </main>
      </div>
    </>
  );
}

export default NotFoundScreen;
