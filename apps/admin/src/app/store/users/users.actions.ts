import { IUser } from '../../pages/admin/admin.interface';
import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_USERS = '[USERS] load',
  LOAD_USERS_SUCCESS = '[USERS] load success',
  LOAD_USERS_ERROR = '[USERS] load error'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public users: IUser[]) {}
}

export class LoadUsersError implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_ERROR;
  constructor(public error: any) {}
}

export type Actions = LoadUsers | LoadUsersSuccess | LoadUsersError;
