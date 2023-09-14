import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoryList } from '../topbar.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
    @Input() public categoryList: Array<ICategoryList> = [] ;

    @Output() public selectedCategoryList:EventEmitter<ICategoryList> = new EventEmitter();

    public addCategory(category:ICategoryList){
      this.selectedCategoryList.emit(category);
    } 
    
}
