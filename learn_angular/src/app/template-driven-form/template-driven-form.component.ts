import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  countryList: Country[] = [
    (new Country('1', 'India')),
    (new Country('2', 'England')),
    (new Country('3', 'France'))
  ]

  submitData(data: NgForm) {
    // console.log(data);
    console.log(data.value);

  }

  initializeData!: InitializeData;

  ngOnInit(): void {
    this.initializeData = {
      mail: "demo@gmail.com",
      gender: "Male",
      isMarried: true,
      country: 2,
      address: {
        city: "Madurai"
      },
    }
  }

}

class Country {
  id: string;
  name: string;

  constructor(Id: string, Name: string) {
    this.id = Id;
    this.name = Name;
  }
}

class InitializeData {
  mail!: string;
  gender!: string;
  isMarried!: boolean;
  country!: number
  address!: {
    city: string;
  }
}
