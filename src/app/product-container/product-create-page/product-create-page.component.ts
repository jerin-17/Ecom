import { Component, OnInit } from '@angular/core';
import { IBookDetails, IBookDetailsDTO } from 'src/app/app.interface';
import { PersistantStorageService } from 'src/app/services/persistant-storage.service';


@Component({
  selector: 'app-product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.scss']
})
export class ProductCreatePageComponent implements OnInit {
  public bookDetails:Array<IBookDetails> = [];
  public index:number = 0;
  public bookDTO! : IBookDetailsDTO;

  
  constructor(public readonly persistantStorage:PersistantStorageService){}
  ngOnInit(): void {
     this.bookDetails = this.persistantStorage.getData("book") || [];
     this.index = this.persistantStorage.getData("index") || 0;
     this.bookDTO = {
      title : "",
      author: "",
      summary: "",
      notes:"",
      rating:0
     }
  }

  public onSubmit(){
   
    let book:IBookDetails = {
      id: this.index,
      title: this.bookDTO.title,
      author: this.bookDTO.author,
      summary: this.bookDTO.summary,
      notes: this.bookDTO.notes,
      rating: this.bookDTO.rating
    } 
    this.bookDetails.push(book);
    this.persistantStorage.setData("book",this.bookDetails);
  }
}
