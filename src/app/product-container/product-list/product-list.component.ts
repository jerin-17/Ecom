import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IProductList } from '../product-container.interface';
import { IBookDetails } from 'src/app/app.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  {
 @Input() public productList : Array<IBookDetails> = [];

  @Output() public cartList:EventEmitter<IBookDetails> = new EventEmitter();
  public addToCart(product:IBookDetails){
    this.cartList.emit(product);
  }

}
