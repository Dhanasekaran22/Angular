import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-app',
  templateUrl: './voting-app.component.html',
  styleUrls: ['./voting-app.component.css']
})
export class VotingAppComponent {
  options=[
    {name:'Option 1',votes:0},
    {name:'Option 2',votes:0},
    {name:'Option 3',votes:0},
  ];

  vote(index:number){
    this.options[index].votes++;
  }

  max=0;
  index=0;
  isTrue=false;
  checkResult(){
     
    for (let i=0;i<this.options.length;i++){
      if(this.max<this.options[i].votes){
        this.max=this.options[i].votes;
        this.isTrue=true;
        this.index=i;
      }
      else if(this.max==this.options[i].votes){
        
      }
    }
    
    }
  }

