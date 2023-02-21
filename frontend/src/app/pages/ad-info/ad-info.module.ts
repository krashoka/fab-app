import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdInfoPageRoutingModule } from './ad-info-routing.module';

import { AdInfoPage } from './ad-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdInfoPageRoutingModule
  ],
  declarations: [AdInfoPage]
})
export class AdInfoPageModule {}
