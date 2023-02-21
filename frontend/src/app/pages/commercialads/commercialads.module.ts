import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercialadsPageRoutingModule } from './commercialads-routing.module';

import { CommercialadsPage } from './commercialads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercialadsPageRoutingModule
  ],
  declarations: [CommercialadsPage]
})
export class CommercialadsPageModule {}
