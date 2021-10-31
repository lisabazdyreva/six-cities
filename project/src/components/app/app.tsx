import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import type {Reviews} from '../../types/review';
import {State} from '../../types/state';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

import browserHistory from '../../browser-history';

import {AppRoute} from '../../const';


function mapStateToProps({isDataLoaded}: State) {
  return ({
    isDataLoaded,
  });
}


const connector = connect(mapStateToProps);

type AppScreenProps = {
  reviews: Reviews;
  cities: string[];
};
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = AppScreenProps & PropsFromRedux;


function App(props: ConnectedComponentProps): JSX.Element {
  const {reviews, cities, isDataLoaded} = props;

  if (!isDataLoaded) {
    return <Spinner />;
  }
  // Страница Favorites доступна только авторизованным пользователям. При попытке перехода к приватной странице выполняется перенаправление на страницу «Sign In» (/login).
  // Если пользователь авторизован, то при переходе на страницу Sign In выполняется перенаправление на главную страницу.
  // Клик по кнопке «Sign Out» приводит к завершению сеанса работы — выходу из закрытой части приложения.
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen
            cities={cities}
          />
        </Route>
        <Route path={AppRoute.Login} exact >
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
        >
        </PrivateRoute>
        <Route path={AppRoute.RoomID} exact>
          <OfferScreen
            reviews={reviews}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
