import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBookDetails } from '../app.interface';
import { PersistantStorageService } from '../services/persistant-storage.service';
import { ICategoryList, IOfferList } from './topbar/topbar.interface';
import { SharedDataServiceService } from '../services/shared-data-service.service';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit{
  
    productList : Array<IBookDetails> = [];
    cartList : Array<IBookDetails> = [];
    public categoryList: Array<ICategoryList> = [];
    public offerList: Array<IOfferList> = [];

    public selectedCategoryList : Array<ICategoryList> = [];
    public selectedOfferList : Array<ICategoryList> = [];

    constructor(private readonly persistantStorage:PersistantStorageService,private readonly router:Router,private readonly sharedData:SharedDataServiceService){}

    ngOnInit(): void {
      this.productList = this.persistantStorage.getData("book");
    } 
  
    public addToCart(product:IBookDetails){
      this.sharedData.setBook(product);
      console.log(this.sharedData.getBook());
      this.router.navigate(['create'])
  }
 public addCategory(categories:Array<ICategoryList>){
   this.selectedCategoryList = categories;
 }
  
 public addOffer(offers: Array<IOfferList>){
  this.selectedOfferList = offers;
 }
  

}