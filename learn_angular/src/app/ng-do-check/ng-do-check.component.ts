import { Component,Input,DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.css']
})
export class NgDoCheckComponent implements DoCheck{
  @Input() childItems:number[]=[];

  private previousItems:number[]=[];
  ngDoCheck(): void {
    if(this.previousItems!==this.childItems){
      console.log("Items Changed from",this.previousItems,"to" ,this.childItems);
      this.previousItems=[...this.childItems]
    }
  }


}
