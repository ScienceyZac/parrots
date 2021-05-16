import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourPageComponent } from './four-o-four-page/four-o-four-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'parrot',
    loadChildren: () =>
      import('./parrot/parrot.module').then((m) => m.ParrotModule),
  },
  {
    path: '**',
    component: FourOFourPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
