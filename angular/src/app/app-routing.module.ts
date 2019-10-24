import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MrliComponent} from './mrli/mrli.component'
import {ProductListComponent} from './product-list/product-list.component'
import {ProductDetailsComponent} from './product-details/product-details.component'
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path:'mrli', component: MrliComponent},
  {path:'', component: ProductListComponent},
  {path:'products/:productId', component: ProductDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'shipping', component: ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
