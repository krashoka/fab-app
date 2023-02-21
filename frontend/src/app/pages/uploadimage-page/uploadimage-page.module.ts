import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadimagePagePageRoutingModule } from './uploadimage-page-routing.module';

import { UploadimagePagePage } from './uploadimage-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadimagePagePageRoutingModule
  ],
  declarations: [UploadimagePagePage]
})
export class UploadimagePagePageModule {}
