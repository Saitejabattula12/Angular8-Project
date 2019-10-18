import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'user', component: UserComponent },
  { path: 'org', component: OrganisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
