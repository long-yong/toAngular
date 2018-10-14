import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.component.html',
  styleUrls: ['./epp.component.css']
})

export class EppComponent implements OnInit {

  title:string;

  newBody: any;
  newTask: any;
  newErr:  any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.title = 'epp.component.ts';
    this.newBody = { title: "", description: "" }
    this.newTask = null;
    this.newErr = null;
  }

  onSubmitNew() {
    this.newTask = null;
    this.newErr = null;
    this.new_Task(this.newBody);
    this.newBody = { title: "", description: "" }
  }

  new_Task(task){
     let obs = this._http.post('/newtask', task);
     obs.subscribe(data => {
        this.newTask = data['newTask'];
        this.newErr  = data['errArr'];
     });

  }

}

