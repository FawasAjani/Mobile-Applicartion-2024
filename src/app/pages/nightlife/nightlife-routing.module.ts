import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightlifePage } from './nightlife.page';

const routes: Routes = [
  {
    path: '',
    component: NightlifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightlifePageRoutingModule {}
