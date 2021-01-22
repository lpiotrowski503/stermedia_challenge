import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts/posts.component';

const components = [AdminComponent, ListComponent, PostsComponent];

@NgModule({
  declarations: [...components],
  imports: [AdminRoutingModule, CoreModule, SharedModule]
})
export class AdminModule {}
