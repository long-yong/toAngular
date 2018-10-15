import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  title:string;
  task:any;

  constructor() { }

  ngOnInit() {
    this.title = 'task.component.ts';
    this.task={};
    this.task.name = 'task1';
  }

}
