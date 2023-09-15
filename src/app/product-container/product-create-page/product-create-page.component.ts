import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { share } from 'rxjs';
import { IBookDetails, IBookDetailsDTO } from 'src/app/app.interface';
import { PersistantStorageService } from 'src/app/services/persistant-storage.service';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';


@Component({
  selector: 'app-product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.scss']
})
export class ProductCreatePageComponent implements OnInit {
  public bookDetails:Array<IBookDetails> = [];
  public index:number = 0;
  public bookDTO! : IBookDetailsDTO;
  public bookDetailForm! : FormGroup
  
  constructor(public readonly persistantStorage:PersistantStorageService,public readonly fb: FormBuilder,
    private readonly sharedData:SharedDataServiceService){}
  ngOnInit(): void {
     this.bookDetails = this.persistantStorage.getData("book") || [];
     this.index = this.persistantStorage.getData("index") || 0;
     let sharedData = this.sharedData.getBook();
    
      this.bookDetailForm = this.fb.group({
        id:[-1],
        title: [""],
        author:[""],
        summary:[""],
        notes:[""],
        rating:[1]
       });
     if(sharedData){
      this.bookDetailForm.patchValue({
        id: sharedData.id,
        title: sharedData.title,
        author : sharedData.author,
        summary: sharedData.summary,
        notes:sharedData.notes,
        rating:sharedData.rating
      })
     }
    
  }

  private checkBookExists(id:number): number|null{
   let index: number =  this.bookDetails.map((book)=>{return book.id}).indexOf(id);
   return index?index:null;
  }

  public onSubmit(){
   
    let index = this.checkBookExists(this.bookDetailForm.value.id);
    console.log(index);
    if(index){
      this.bookDetails[index] =this.bookDetailForm.value as IBookDetails;
    }else{
      this.bookDetailForm.value.id = this.index;
      this.bookDetails.push(this.bookDetailForm.value as IBookDetails);
      this.persistantStorage.setData("index",++this.index);
    }
   

    
    this.persistantStorage.setData("book",this.bookDetails);
    
  }
}
