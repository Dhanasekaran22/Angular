import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-sharing',
  templateUrl: './form-sharing.component.html',
  styleUrls: ['./form-sharing.component.css']
})
export class FormSharingComponent {
  //using input Decorator
 /*
  cars:string[]=[];
  carName:string="";

  isNull=()=>{
    if(this.carName.length<3){
      return true;
    }
    else{
      return false;
    }
  }; 
  
  addCar(){
    this.cars.push(this.carName);
    this.carName="";
  }
  */

  //using Output Decorator

  @Output() carAdded:EventEmitter<string[]>=new EventEmitter;
  cars:string[]=[];
  carName:string="";

  isNull=()=>{
    if(this.carName.length<3){
      return true;
    }
    else{
      return false;
    }
  }; 
  
  addCar(){
    this.cars.push(this.carName);
    this.carName="";
    this.carAdded.emit(this.cars)
  }

}
