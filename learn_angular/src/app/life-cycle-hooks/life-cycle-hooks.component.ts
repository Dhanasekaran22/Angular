import { Component,Input,OnChanges, SimpleChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit{
  
  //ngOnChanges()

  @Input() msgFromApp="";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called!");

    // if(!changes['msgFromApp'].isFirstChange()){
    //   console.log("You are modifying the original value");
    //   console.log(changes['msgFromApp'].currentValue);
    // }
  }

  //ngOnInit
  
  ngOnInit(): void {
    console.log("ngOnInit Called");
    this.msgFromApp='initialize through ngOnInit()'     //clear example of ngOninit
    

    
  }
}
