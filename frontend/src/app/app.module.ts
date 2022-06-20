import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CartComponent } from './navigation-bar/cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './shop/category/category.component';
import { ProductComponent } from './shop/product/product.component';
import { CarouselComponent } from './shop/carousel/carousel.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    SearchBarComponent,
    CartComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent,
    CarouselComponent,
    ProductPageComponent,
    MenuComponent,
    CategoryPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
