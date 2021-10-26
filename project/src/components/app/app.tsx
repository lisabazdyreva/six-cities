import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';

import PrivateRoute from '../private-route/private-route';

import {AppRoute, AuthorizationStatus} from '../../const';

import type {Offers} from '../../types/offer';
import type {Reviews} from '../../types/review';


type AppScreenProps = {
  offers: Offers;
  reviews: Reviews;
  cities: string[];
};

function App(props: AppScreenProps): JSX.Element {
  const {offers, reviews, cities} = props;

  return (
    <BrowserRouter>
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
          render={() => <FavoritesScreen offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route path={AppRoute.RoomID} exact>
          <OfferScreen
            offers={offers}
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

export default App;
