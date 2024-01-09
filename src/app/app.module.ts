import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorRequest } from './config/interceptors/http-interceptors';
import { ProductsService } from './services/products/products-service.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    RatingComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorRequest, multi: true },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
