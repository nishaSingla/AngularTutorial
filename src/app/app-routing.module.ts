import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ViewchildComponent } from './viewchild/viewchild.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'view', component: ViewchildComponent },
  {path: 'product', loadChildren:'./product-dashboard/product-dashboard.module#ProductDashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
