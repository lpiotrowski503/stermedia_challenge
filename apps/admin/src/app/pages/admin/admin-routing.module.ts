import { PostsComponent } from './posts/posts.component';
// import { EditComponent } from './list/edit/edit.component';
// import { AddComponent } from './list/add/add.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ChangePasswordComponent } from './list/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'posts/:id',
        component: PostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
