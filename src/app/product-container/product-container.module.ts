import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductContainerComponent } from './product-container.component';
import { CategoryListComponent } from './topbar/category-list/category-list.component';
import { OfferListComponent } from './topbar/offer-list/offer-list.component';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    TopbarComponent,
    CategoryListComponent,
    OfferListComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ProductContainerComponent
  ]
})
export class ProductContainerModule { }
