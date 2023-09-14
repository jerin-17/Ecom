import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title:string = 'my-ng-project';

   public ngOnInit(): void {
    this.title = "new title";
  }

  public changeTitle(){
    this.title = "my-ng-project";
  }
}
