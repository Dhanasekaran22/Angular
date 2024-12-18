import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent {
  temperature:number|null=null;
  conversionType:string="CtoF";
  convertedTemperature:number|null=null;

  convert(){
    if(this.temperature!=null){
      if(this.conversionType=="CtoF"){
        this.convertedTemperature=this.temperature*(9/5)+32;
        this.temperature=null;
      }
      else if(this.conversionType=="FtoC"){
        this.convertedTemperature=(this.temperature-32)*(5/9);
        this.temperature=null;
      }
    }
  }
}
