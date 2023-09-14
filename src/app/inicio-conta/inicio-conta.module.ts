import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioContaPageRoutingModule } from './inicio-conta-routing.module';

import { InicioContaPage } from './inicio-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioContaPageRoutingModule
  ],
  declarations: [InicioContaPage]
})
export class InicioContaPageModule {}
