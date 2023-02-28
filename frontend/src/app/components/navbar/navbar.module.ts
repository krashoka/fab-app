import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavbarPageRoutingModule } from './navbar-routing.module';
import {NavbarPage} from './navbar.page'

// import { NavbarPage } from './navbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageRoutingModule
  ],
  declarations: [NavbarPage],
  exports: [NavbarPage]
})
export class NavbarPageModule {}
