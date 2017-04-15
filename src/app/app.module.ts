import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
// import { AuthGuard } from './auth.service';
// import{FirebaseService} from './services/firebase.service';


// import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

import { PricingComponent } from './pricing/pricing.component';
// import { LoginComponent } from './login/login.component';
// import { EmailComponent } from './email/email.component';
// import { SignupComponent } from './signup/signup.component';
// import { MembersComponent } from './members/members.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SistingComponent } from './sisting/sisting.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { EditlistingComponent } from './editlisting/editlisting.component';


// export const firebaseConfig = {
//     apiKey: "AIzaSyBFji7Mbw1dtRkhumzjAoOUrtjRSmzPbdo",
//     authDomain: "pattats-8842c.firebaseapp.com",
//     databaseURL: "https://pattats-8842c.firebaseio.com",
//     storageBucket: "pattats-8842c.appspot.com",
//     messagingSenderId: "577337931748"
// };


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    PricingComponent,
    // LoginComponent,
    // EmailComponent,
    // SignupComponent,
    // MembersComponent,
    ListingsComponent,
    HomeComponent,
    NavbarComponent,
    SistingComponent,
    AddlistingComponent,
    EditlistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
