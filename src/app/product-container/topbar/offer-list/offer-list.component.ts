import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IOfferList } from '../topbar.interface';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent {


  @Input() public offerList: Array<IOfferList> = [];
  @Output() public selectedOfferList : EventEmitter<IOfferList> = new EventEmitter();

  
  public addOffer(offer:IOfferList){
      this.selectedOfferList.emit(offer);
  }
}
