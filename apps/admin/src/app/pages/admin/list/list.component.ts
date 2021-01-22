import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventBusService } from '@core/services/event-bus.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { opacity } from '@core/animations/opacity.animations';

@Component({
  selector: 'nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  animations: [opacity]
})
export class ListComponent implements OnInit {
  public users$: Observable<any>;

  constructor(
    private eventBus: EventBusService,
    private store: Store<AppState>
  ) {
    this.users$ = this.store.select('users');
  }

  ngOnInit(): void {}

  public onUserData(id: string) {
    this.eventBus.emit({
      chanel: 'change_page',
      value: '/posts/' + id
    });
  }
}
