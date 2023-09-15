import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone:true
})
export class OnlyNumberDirective {

  constructor(private readonly ele :ElementRef) { }
  
  @HostListener('keydown',['$event']) onKeyDown(event:KeyboardEvent){
      console.log(Number(event.key));  
      if(isNaN(Number(event.key)) || event.key === ' '){
        event.preventDefault();
      }
      if(this.ele.nativeElement.value < 0 && this.ele.nativeElement.value > 5){
        event.preventDefault();
      }
  }
}
