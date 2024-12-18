import { Component } from '@angular/core';
import { Task } from '../models/taskType';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent {
  tasks:Task[]=[];
  newTask="";
  addTask(){
    if(this.newTask.trim()!==""){
      this.tasks.push({name:this.newTask,isCompleted:false});
      this.newTask="";
      
    }
  }

  deleteTask(index:number){
    this.tasks.splice(index,1)
  }
}
