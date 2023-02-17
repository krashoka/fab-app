import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAdvertisementPageRoutingModule } from './add-new-advertisement-routing.module';

import { AddNewAdvertisementPage } from './add-new-advertisement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewAdvertisementPageRoutingModule
  ],
  declarations: [AddNewAdvertisementPage]
})
export class AddNewAdvertisementPageModule {}
