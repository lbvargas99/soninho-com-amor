import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioContaPage } from './inicio-conta.page';

const routes: Routes = [
  {
    path: '',
    component: InicioContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioContaPageRoutingModule {}
