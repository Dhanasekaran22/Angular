import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn_angular';

  //ngOnChanges()
  message: string = "From Parent";


  //ngDoCheck()
  parentTaskList = [
    { title: 'task1', completed: false },
    { title: 'task2', completed: false },
  ];


  markTaskAsCompleted(index: number) {
    this.parentTaskList[index].completed = true;         // Angular wont see this Change
    console.log("clicked")                      // In a 'component' angular didn't see the change but when we console and see, the changes are made 
                                                // but in angular we create new reference to make the angular note that it was changed

    
    
  }
}