import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ParrotsComponent } from './parrots/parrots.component';

const routes: Routes = [
  {
    path: '',
    component: ParrotsComponent,
  },

  {
    path: 'edit/:name',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
