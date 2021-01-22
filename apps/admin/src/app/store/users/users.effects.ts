import { IUser } from '../../pages/admin/admin.interface';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AdminService } from '../../pages/admin/admin.service';
import * as UsersAction from './users.actions';
import { LoadUsersSuccess, LoadUsersError } from './users.actions';

@Injectable({ providedIn: 'root' })
export class UsersEffects {
  constructor(private actions$: Actions, private admin: AdminService) {}

  @Effect()
  LOAD_USERS = this.actions$.pipe(
    ofType(UsersAction.UsersActionTypes.LOAD_USERS),
    switchMap(() =>
      this.admin.getUsers().pipe(
        map((users: IUser[]) => new LoadUsersSuccess(users)),
        catchError((error: any) => of(new LoadUsersError(error)))
      )
    )
  );
}
