import {Router as BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

import browserHistory from '../../browser-history';

import {AppRoute, AuthorizationStatus, FetchStatus} from '../../const';

import {getIsDataLoaded} from '../../store/app-data/selectors';
import {getFetchStatusOffers} from '../../store/app-status/selectors';
import {getAuthorizationStatus} from '../../store/app-user/selectors';


function App(): JSX.Element {

  const isDataLoaded = useSelector(getIsDataLoaded);
  const fetchStatus = useSelector(getFetchStatusOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const isFetchTrying = fetchStatus === FetchStatus.Trying;


  if (!isDataLoaded && isFetchTrying) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen />
        </Route>
        <Route
          path={AppRoute.Login}
          exact
          render={() => (isAuth) ? <Redirect to={AppRoute.Main} /> : <LoginScreen/>}
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
