import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewAdvertisementPageRoutingModule } from './add-new-advertisement-routing.module';

import { AddNewAdvertisementPage } from './add-new-advertisement.page';

import { PipesModule } from './safe.module';
import {NavbarPageModule} from '../../../components/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    AddNewAdvertisementPageRoutingModule,
    NavbarPageModule
  ],
  declarations: [AddNewAdvertisementPage]
})
export class AddNewAdvertisementPageModule {}
