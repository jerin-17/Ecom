import { Component,OnInit } from '@angular/core';
import { IProductList } from './product-container.interface';
import { ICategoryList, IOfferList } from './topbar/topbar.interface';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit{
  
    productList : Array<IProductList> = [];
    cartList : Array<IProductList> = [];
    public categoryList: Array<ICategoryList> = [];
    public offerList: Array<IOfferList> = [];

    public selectedCategoryList : Array<ICategoryList> = [];
    public selectedOfferList : Array<ICategoryList> = [];

    ngOnInit(): void {
      this.productList = [
        {id: 1, label: 'Product list 1', price: 250},
        {id: 2, label: 'Product list 2', price: 300},
        {id: 3, label: 'Product list 3', price: 456},
        {id: 4, label: 'Product list 4', price: 900},
        {id: 5, label: 'Product list 5', price: 150},
        {id: 6, label: 'Product list 6', price: 69},
      ]
    

    } 
  
    public addToCart(product:IProductList){
      this.cartList.push(product);
  }
 public addCategory(categories:Array<ICategoryList>){
   this.selectedCategoryList = categories;
 }
  
 public addOffer(offers: Array<IOfferList>){
  this.selectedOfferList = offers;
 }
  

}