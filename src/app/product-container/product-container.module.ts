import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductContainerComponent } from './product-container.component';
import { CategoryListComponent } from './topbar/category-list/category-list.component';
import { OfferListComponent } from './topbar/offer-list/offer-list.component';
import { ProductCreatePageComponent } from './product-create-page/product-create-page.component';
import { FormsModule } from '@angular/forms';
import { PersistantStorageService } from '../services/persistant-storage.service';
import { OnlyNumberDirective } from '../directives/only-number.directive';
import { CapitalizePipe } from '../pipes/capitalize.pipe';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductListComponent,
    TopbarComponent,
    CategoryListComponent,
    OfferListComponent,
    ProductCreatePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OnlyNumberDirective,
    CapitalizePipe
  ],

  exports:[
    ProductContainerComponent
  ],

  providers:[PersistantStorageService]
})
export class ProductContainerModule { }
