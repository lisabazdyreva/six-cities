const AUTHORIZATION_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

function getToken(): Token {
  const token = localStorage.getItem(AUTHORIZATION_TOKEN_KEY_NAME);
  return token ?? '';
}

function saveToken (token: Token): void {
  localStorage.setItem(AUTHORIZATION_TOKEN_KEY_NAME, token);
}

function deleteToken(): void {
  localStorage.removeItem(AUTHORIZATION_TOKEN_KEY_NAME);
}

export {getToken, saveToken, deleteToken};
