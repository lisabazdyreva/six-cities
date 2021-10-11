import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';

import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';
import {Offers} from '../../types/offer';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


type AppScreenProps = {
  rentOffersValue: number;
  offers: Offers;
};

function App({rentOffersValue, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen
            rentOffersValue={rentOffersValue}
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.Login} exact >
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
