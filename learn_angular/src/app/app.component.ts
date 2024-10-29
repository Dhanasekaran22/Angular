import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'learn_angular';

  //ngOnChanges()
  message: string = "From Parent";


  //ngDoCheck()                                                     
  items=[1,2,3];
  addItem(){
    // this.items.push(this.items.length+1);            //Angular wont see this Change
    this.items=[...this.items,this.items.length+1];     //In a 'component' angular didn't see the change but when we console and see, the changes are made
    }                                                   //but in angular we create new reference to make the angular note that it was changed
    
  
  //ngOnDestroy()
  isDisabled=false;
  

}