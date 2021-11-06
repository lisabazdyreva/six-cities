import {Route, Redirect, RouteProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';

import {AppRoute, AuthorizationStatus} from '../../const';


function mapStateToProps({USER}: State) {
  return ({
    authorizationStatus: USER.authorizationStatus,
  });
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;


function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

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
export default connector(PrivateRoute);
