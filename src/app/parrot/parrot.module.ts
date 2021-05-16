import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParrotRoutingModule } from './parrot-routing.module';
import { ParrotComponent } from './parrot/parrot.component';
import { ViewComponent } from './view/view.component';
import { ImgComponent } from './img/img.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ParrotComponent,
    ViewComponent,
    ImgComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ParrotRoutingModule
  ]
})
export class ParrotModule { }
