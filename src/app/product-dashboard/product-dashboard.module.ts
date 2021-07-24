import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { Routes , RouterModule} from '@angular/router';
import { ProductWidgetComponent } from './product-widget/product-widget.component';


const routes: Routes = [
 { path: '', component: ProductDashboardComponent}
];


@NgModule({
  declarations: [ProductDashboardComponent, ProductWidgetComponent],
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
