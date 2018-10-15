import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gpp',
  templateUrl: './gpp.component.html',
  styleUrls: ['./gpp.component.css']
})

export class GppComponent implements OnInit {

  allTask:any;
  selectedTask:any;

  constructor(private _http: HttpClient) { }

  clearTask() {
    this.allTask = null;
    this.selectedTask = null;
  }

  ngOnInit() {
    this.clearTask();
  }

  getAllTask() {
    this.clearTask();
    let obs = this._http.get('/alltask');
    obs.subscribe(data => {
      this.allTask = data['allTask'];
    });
  }

  taskToShow(task) {
    this.selectedTask = task;
  }

}
