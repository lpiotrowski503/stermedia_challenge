import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@libs/ui/src/lib/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';

const modules = [
  CommonModule,
  CoreModule,
  ReactiveFormsModule,
  FormsModule,
  UiModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {}
