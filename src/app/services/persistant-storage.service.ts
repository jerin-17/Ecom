import { Injectable } from '@angular/core';

@Injectable()
export class PersistantStorageService {

  constructor() { }

  public getData(key:string){
    let data = localStorage.getItem(key);
    return JSON.parse(data!);
  }

  public setData(key:string,value:any){
    return localStorage.setItem(key,JSON.stringify(value));
  }
}
