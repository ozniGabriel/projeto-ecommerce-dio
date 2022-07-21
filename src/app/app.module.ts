import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductItemComponent } from './components/list-products/product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListProductsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
