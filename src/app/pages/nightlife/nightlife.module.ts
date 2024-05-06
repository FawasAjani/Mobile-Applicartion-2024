import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightlifePageRoutingModule } from './nightlife-routing.module';

import { NightlifePage } from './nightlife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightlifePageRoutingModule
  ],
  declarations: [NightlifePage]
})
export class NightlifePageModule {}
