import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemSliderComponent } from './product-item-slider/product-item-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './category-list/category-list.component';
import { SamsungItemComponent } from './samsung-item/samsung-item.component';
import { IphoneItemComponent } from './iphone-item/iphone-item.component';
import { XiaomiItemComponent } from './xiaomi-item/xiaomi-item.component';
import { HuaweiItemComponent } from './huawei-item/huawei-item.component';
import { ProductService } from './product.service';
import { CategoriesService } from './categories.service';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemSliderComponent,
    CategoryListComponent,
    SamsungItemComponent,
    IphoneItemComponent,
    XiaomiItemComponent,
    HuaweiItemComponent,
    ProductItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
