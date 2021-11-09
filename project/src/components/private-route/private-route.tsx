import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/app-user/selectors';


type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}


function PrivateRoute({exact, path, render}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth ?
          render() : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export {PrivateRoute};
export default PrivateRoute;
