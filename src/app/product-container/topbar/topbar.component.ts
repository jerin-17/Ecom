import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { ICategoryList, IOfferList } from './topbar.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
 @Input() public categoryList: Array<ICategoryList> = [];
 @Input() public offerList: Array<IOfferList> = [];

 @Output() public selectedCategory:EventEmitter<Array<ICategoryList>> = new EventEmitter;
 @Output() public selectedOffer:EventEmitter<Array<IOfferList>> = new EventEmitter();
 
  public selectedCategoryList: Array<ICategoryList> = [];
  public selectedOfferList: Array<IOfferList> = [];

  public ngOnInit(): void {
    this.categoryList=[
      {id: 1, label: "category1"},
      {id: 2, label: "category2"},
      {id: 3, label: "category3"},
      {id: 4, label: "category4"},
      {id: 5, label: "category5"},
      {id: 6, label: "category6"},
    ]

    this.offerList = [
      {id: 1, label:"offer1"},
      {id: 2, label:"offer2"},
      {id: 3, label:"offer3"},
      {id: 4, label:"offer4"},
      {id: 5, label:"offer5"},
      {id: 6, label:"offer6"},
    ]
  }

  public addCategory(category: ICategoryList){
    this.selectedCategoryList.push(category);
  }

  public addOffer(offer:IOfferList){
    this.selectedOfferList.push(offer);
  }


  public addSelectedCategoryList(){
    this.selectedCategory.emit(this.selectedCategoryList);
  }

  public addSelectedOfferList(){
    this.selectedOffer.emit(this.selectedOfferList);
  }

}

