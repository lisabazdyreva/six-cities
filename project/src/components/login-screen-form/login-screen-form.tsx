import {ChangeEvent, SyntheticEvent, useState} from 'react';
import {useDispatch} from 'react-redux';

import {REG_EXP_PASSWORD, ErrorMessage, TextMessage} from '../../const';

import {loginAction} from '../../store/actions/api-actions/api-actions-user';


function LoginScreenForm(): JSX.Element {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isFieldsEmpty = login !== '' && password !== '';
  const isDisabled = login === '' || password === '';

  function handleAuthFormSubmit(evt: SyntheticEvent) {
    evt.preventDefault();

    if (isFieldsEmpty) {
      dispatch(loginAction({
        login: login,
        password: password,
      }));
    }
  }

  function handlePasswordChange(evt: ChangeEvent<HTMLInputElement>) {
    if (!evt.target.value.match(REG_EXP_PASSWORD)) {
      evt.target.setCustomValidity(ErrorMessage.PasswordInput);
    } else {
      evt.target.setCustomValidity('');
    }
    setPassword(evt.target.value);
  }

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleAuthFormSubmit}>
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
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={isDisabled}
      >
        {TextMessage.SignIn}
      </button>
    </form>
  );
}

export {LoginScreenForm};
export default LoginScreenForm;
