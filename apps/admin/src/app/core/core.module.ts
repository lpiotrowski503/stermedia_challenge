import { NgModule } from '@angular/core';
import { ContentComponent } from './layouts/content/content.component';

const components = [ContentComponent];

@NgModule({
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
