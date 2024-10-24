import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  heading="List Of Movies";
  
  movies=["Bigil","Love Today","Vada Chennai","Doctor"]

  movieDirector=[
    {movie:"Bigil",director:"Atlee",hero:"Vijay"},
    {movie:"Love Today",director:"Pradeep Ranganathan",hero:"Pradeep Ranganathan"},
    {movie:"Vada Chennai",director:"Vetrimaran",hero:"Dhanush"},
    {movie:"Doctor",director:"Nelson DilipKumar",hero:"Sivakarthikeyan"}
  ]

  num=0;
  selectedOption:string="";

  showMe=false;
  
  showItems:boolean=false;
  items:string[]=["item-1","item-2","item-3"]

  enableColor=false;
  changeFont=false;
  enableItalic=false;

  isChecked=false;

  status="Success";
  inputColor="";

  shadowIntensity=0;
  borderRadius=0;
}
