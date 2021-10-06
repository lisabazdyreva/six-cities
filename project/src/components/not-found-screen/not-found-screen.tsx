import Icons from '../icons/icons';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Icons />
      <div className="page page--gray page--not-found">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="page__main page__main--not-found" style={{textAlign: 'center'}}>
          <h1>404. Page not found.</h1>
          <a href="/">Вернуться на главную</a>
        </main>
      </div>
    </>
  );
}

export default NotFoundScreen;
