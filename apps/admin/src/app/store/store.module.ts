import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { usersReducer } from './users/users.reducer';
import { UsersEffects } from './users/users.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgRxStoreModule.forRoot({
      users: usersReducer
    }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class StoreModule {}
