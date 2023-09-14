import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IProductList } from '../product-container.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  {
 @Input() public productList : Array<IProductList> = [];

  @Output() public cartList:EventEmitter<IProductList> = new EventEmitter();
  public addToCart(product:IProductList){
    this.cartList.emit(product);
  }

}
