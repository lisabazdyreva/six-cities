import {AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

export function getAuthorizationStatus(state: State): AuthorizationStatus {
  return state[NameSpace.user].authorizationStatus;
}

export function getLogin(state: State): string {
  return state[NameSpace.user].login;
}
