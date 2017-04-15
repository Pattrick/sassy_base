import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FeaturesComponent} from './features/features.component';
import {PricingComponent} from './pricing/pricing.component';

import {ListingsComponent} from './listings/listings.component';
import {AddlistingComponent} from './addlisting/addlisting.component';

// import { LoginComponent } from './login/login.component';
// import { MembersComponent } from './members/members.component';
// import { AuthGuard } from './auth.service';
// import { SignupComponent } from './signup/signup.component';
// import { EmailComponent } from './email/email.component';

export const router: Routes = [
  {path: '',redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'addlisting', component: AddlistingComponent },
      // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
    // { path: 'login-email', component: EmailComponent },
    // { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  {path: 'about', component: AboutComponent},
   {path: 'features', component: FeaturesComponent},
   {path: 'pricing', component: PricingComponent}
       
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);