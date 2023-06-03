import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtratoPageRoutingModule } from './extrato-routing.module';

import { ExtratoPage } from './extrato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtratoPageRoutingModule
  ],
  declarations: [ExtratoPage]
})
export class ExtratoPageModule {}
