import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appUser} from './app-user/app-user';
import {appProcess} from './app-process/app-process';
import {appStatus} from './app-status/app-status';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  app = 'APP',
  status = 'STATUS',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.user]: appUser,
  [NameSpace.app]: appProcess,
  [NameSpace.status]: appStatus,
});

export type RootState = ReturnType<typeof rootReducer>;
