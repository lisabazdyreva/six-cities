import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

import browserHistory from '../../browser-history';

import {AppRoute, FetchStatus} from '../../const';
import {
  getFetchStatus,
  getIsDataLoaded
} from '../../store/app-data/selectors';

type AppScreenProps = {
  cities: string[];
};


function App({cities}: AppScreenProps): JSX.Element {

  const isDataLoaded = useSelector(getIsDataLoaded);
  const fetchStatus = useSelector(getFetchStatus);


  if (!isDataLoaded && fetchStatus === FetchStatus.Trying) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen
            cities={cities}
          />
        </Route>
        <Route
          path={AppRoute.Login}
          exact
          render={() => <LoginScreen/>}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
        >
        </PrivateRoute>
        <Route path={AppRoute.RoomID} exact>
          <OfferScreen/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default App;
