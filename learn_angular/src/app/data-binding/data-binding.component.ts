import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  concept1="This is One way Binding";
  designation="Indian Team Captain";
  firstName="MS";
  lastName="Dhoni";

  concept2="This is Two way Binding"
  name="Rahul";

  stringInterpolation="This is String Interpolation and it is called by method";
  color="brown";

  getTitle(){
    return this.stringInterpolation;
  }

  getMaximumNumber(first:number,second:number){
    return Math.max(first,second);

  }

  isDisabled=true;
  count=0;
  
  onClick(){
    this.count++;
  }

  inputText:string="";
  notNull=true;

  copyVariable:string="";
  
  isValue(event:any){
    this.inputText=(event.target as HTMLInputElement).value;

    if(this.inputText.length>1){
      this.notNull=false;
    }
    else{
      this.notNull= true;
    }
  }

  
}


