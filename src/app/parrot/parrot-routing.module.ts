import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourPageComponent } from '../four-o-four-page/four-o-four-page.component';
import { EditComponent } from './edit/edit.component';
import { ImgComponent } from './img/img.component';
import { ParrotComponent } from './parrot/parrot.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: ':name',
    component: ParrotComponent,
    children: [
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'img',
        component: ImgComponent,
        data: { parrot: ParrotComponent.prototype.parrot },
      },
      { path: '', component: ViewComponent },
    ],
  },
  {
    path: '',
    component: FourOFourPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrotRoutingModule {}
