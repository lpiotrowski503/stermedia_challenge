import { IUser } from '../../pages/admin/admin.interface';
import * as UsersAction from './users.actions';

const initialState: IUser[] = [];

export function usersReducer(
  state: IUser[] = initialState,
  action: UsersAction.Actions
): IUser[] {
  switch (action.type) {
    case UsersAction.UsersActionTypes.LOAD_USERS_SUCCESS:
      state = [...action.users];
      return state;

    default:
      return state;
  }
}
