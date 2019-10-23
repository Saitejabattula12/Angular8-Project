import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { IcamServiceService } from './icam-service.service';
import { GlobalnavComponent } from './globalnav/globalnav.component';
import { GlobalfooterComponent } from './globalfooter/globalfooter.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    UserComponent,
    OrganisationComponent,
    GlobalnavComponent,
    GlobalfooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [IcamServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
