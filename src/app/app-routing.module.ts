import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {PrivatePolicyTermComponent} from './home/private-policy-term/private-policy-term.component';
import {RequestTutorComponent} from './request-tutor/request-tutor.component';

const routes: Routes = [
  {path: '' , redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent, data: { breadcrumb: 'Home' }},
  { path: 'Contact-us', component: ContactComponent, data: { breadcrumb: 'Contact-Us' }},
  { path: 'about-us', component: AboutComponent, data: { breadcrumb: 'about-Us' }},
  { path: 'Term-of-use', component: PrivatePolicyTermComponent, data: { breadcrumb: 'Term-Of-Use' }},
  { path: 'Request-a-tutor', component: RequestTutorComponent, data: { breadcrumb: 'Request-A-Tutor' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
