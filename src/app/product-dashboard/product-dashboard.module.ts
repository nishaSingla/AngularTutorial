import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { Routes , RouterModule} from '@angular/router';


const routes: Routes = [
 { path: '', component: ProductDashboardComponent}
];


@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductDashboardModule { 
  constructor(){
    // console.log('Product Dashboard')
  }
}
