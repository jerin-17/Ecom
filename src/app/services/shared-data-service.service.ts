import { Injectable } from '@angular/core';
import { IBookDetails } from '../app.interface';

@Injectable()
export class SharedDataServiceService {

  public book!:IBookDetails;

  constructor() { }

  public getBook(){
    return this.book;
  }

  public setBook(book:IBookDetails){
    this.book = book;
  }
}

