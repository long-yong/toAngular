import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpp',
  templateUrl: './gpp.component.html',
  styleUrls: ['./gpp.component.css']
})

export class GppComponent implements OnInit {

  title:string;

  task:any;

  constructor() { }

  ngOnInit() {
    this.title = 'gpp.component.ts';
    this.task.name = 'task1';
  }

}
