import { Component,Input,OnChanges, SimpleChanges,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit,DoCheck{
  
  //ngOnChanges()

  @Input() msgFromApp="";
  tasks: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called!");

    if(!changes['msgFromApp'].isFirstChange()){
      console.log("You are modifying the original value");
      console.log(changes['msgFromApp'].currentValue);
    }
  }

  //ngOnInit
  
  ngOnInit(): void {
    console.log("ngOnInit Called");
    this.msgFromApp='initialize through ngOnInit()'     //clear example of ngOnInit()
  }

  @Input() taskItems:any[]=[];

  previousTaskItems: any[]=[];

  ngDoCheck(): void {
    if(this.taskItems!==this.previousTaskItems){
      console.log("Tasks have Changed");
      this.previousTaskItems=[...this.taskItems]     // new reference(spread operator) was created and angular note the changes
      
    }
  }
}
