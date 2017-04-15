import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/AboutComponent';
import {FeaturesComponent} from './features/features.component';
import {PricingComponent} from './pricing/pricing.component';

const routes: Routes = [
  {path: '',redirectTo:'about',pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
   {path: 'features', component: FeaturesComponent},
   {path: 'pricing', component: PricingComponent}
       
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RouterRoutingModule { }
