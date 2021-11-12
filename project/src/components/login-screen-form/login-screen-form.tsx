import {ChangeEvent, SyntheticEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/actions/api-actions/api-actions-user';


function LoginScreenForm(): JSX.Element {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();

    if (login !== '' && password !== '') {
      dispatch(loginAction({
        login: login,
        password: password,
      }));
    }
  }

  function onPasswordChange(evt: ChangeEvent<HTMLInputElement>) {
    if (!evt.target.value.match(/(?=.*[0-9])(?=.*[A-Za-z])[0-9A-Za-z]{2,}/)) {
      evt.target.setCustomValidity('The password must be at least 1 letter and 1 number.');
    } else {
      evt.target.setCustomValidity('');
    }

    setPassword(evt.target.value);
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
          onChange={onPasswordChange}
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
export default LoginScreenForm;
