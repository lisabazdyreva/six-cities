import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

import browserHistory from '../../browser-history';

import {AppRoute, FetchStatus} from '../../const';


function mapStateToProps({isDataLoaded, authorizationStatus, fetchStatus}: State) {
  return ({
    isDataLoaded,
    authorizationStatus,
    fetchStatus,
  });
}

const connector = connect(mapStateToProps);

type AppScreenProps = {
  cities: string[];
};
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = AppScreenProps & PropsFromRedux;


function App(props: ConnectedComponentProps): JSX.Element {
  const {cities, isDataLoaded, fetchStatus} = props;

  if (!isDataLoaded && fetchStatus === FetchStatus.Trying) {
    return <Spinner />;
  }

  // TODO Если пользователь авторизован, то при переходе на страницу Sign In выполняется перенаправление на главную страницу. пока непонятно, потом сделать
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
          render={({history}) => <LoginScreen onAuth={() => history.push(AppRoute.Main)}/>}
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
export default connector(App);
