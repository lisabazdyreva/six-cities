import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appUser} from './app-user/app-user';
import {appProcess} from './app-process/app-process';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  app = 'APP',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.user]: appUser,
  [NameSpace.app]: appProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
