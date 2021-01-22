import { IPost, IUser } from './../admin.interface';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { opacity } from '@core/animations/opacity.animations';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'nx-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  animations: [opacity]
})
export class PostsComponent implements OnInit {
  public posts$: Observable<IPost[]>;
  public id: string;
  public userData$: Observable<IUser>;
  public radio = true;

  constructor(
    private store: Store<AppState>,
    private admin: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(users => {
      this.route.params.subscribe(params => {
        this.admin.getPosts(params['id']).subscribe(posts => {
          this.id = params['id'];
          this.posts$ = of(posts);
          this.userData$ = of({
            ...users.filter(user => user.id === +this.id)[0],
            postsCount: posts.length
          });
        });
      });
    });
  }

  onRadio() {
    this.radio = !this.radio;
  }
}
