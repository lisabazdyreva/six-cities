import {SyntheticEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {ThunkAppDispatch} from '../../types/action';
import {AuthorizationData} from '../../types/authorization-data';

import {loginAction} from '../../store/actions/api-actions';


function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return({
    onSubmit(authorizationData: AuthorizationData, openMainPage: () => void) {
      dispatch(loginAction(authorizationData));
      openMainPage();
    },
  });
}
const connector = connect(null, mapDispatchToProps);

type LoginScreenFormProps = {
  onAuth: () => void;
};
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LoginScreenFormProps;


function LoginScreenForm({onAuth, onSubmit}:ConnectedComponentProps): JSX.Element {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    if (login !== '' && password !== '') {
      onSubmit({
        login: login,
        password: password,
      }, onAuth,
      );
    }
  }

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(evt) => setLogin(evt.target.value)}
          value={login}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(evt) => setPassword(evt.target.value)}
          value={password}
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={login === '' || password === ''}
      >
        Sign in
      </button>
    </form>
  );
}

export {LoginScreenForm};
export default connector(LoginScreenForm);
