import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'products/:id', component: ProductPageComponent},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
