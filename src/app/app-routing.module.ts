import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParrotsComponent } from './parrots/parrots.component';

const routes: Routes = [
  {
    path: '',
    component: ParrotsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
