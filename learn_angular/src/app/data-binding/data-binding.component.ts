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

}
