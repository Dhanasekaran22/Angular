import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-list-sharing',
  templateUrl: './list-sharing.component.html',
  styleUrls: ['./list-sharing.component.css']
})
export class ListSharingComponent {

  //using Input Decorator

  // @Input('carsInput') carList:string[]=[];  
  
 //using OutPut Decorator

 carList:string[]=[];
 
 carDataUpdated(carsData:string[]){
  this.carList=carsData;
 }

      
}
