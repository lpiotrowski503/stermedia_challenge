import { LoadUsers } from '../../store/users/users.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IGetUsersResponse } from './admin.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { opacity } from '@core/animations/opacity.animations';
import { RoutingService } from '@core/services/routing.service';

@Component({
  selector: 'nx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  animations: [opacity]
})
export class AdminComponent implements OnInit {
  public user$: Observable<IGetUsersResponse>;
  public display = true;

  constructor(
    private store: Store<AppState>,
    private routing: RoutingService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
    this.routing.changePage.subscribe(state => (this.display = !state));
  }
}
