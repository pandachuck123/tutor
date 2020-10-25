import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '' , redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent, data: { breadcrumb: 'Home' }},
  { path: 'contact-us', component: ContactComponent, data: { breadcrumb: 'Home' }},
  { path: 'about-us', component: AboutComponent, data: { breadcrumb: 'Home' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
