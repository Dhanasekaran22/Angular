import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  countryList:Country[]=[
    (new Country('1','India')),
    (new Country('2','England')),
    (new Country('3','France'))
  ]

}

class Country{ 
  id:string;
  name:string;

  constructor(Id:string,Name:string){
    this.id=Id;
    this.name=Name;
  }
}