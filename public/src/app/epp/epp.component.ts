import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.component.html',
  styleUrls: ['./epp.component.css']
})

export class EppComponent implements OnInit {

  title:string;

  formBody: any;
  newTask: any;
  newErr: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.title = 'epp.component.ts';
    this.formBody = { title: "", description: "" }
    this.newTask = null;
    this.newErr = null;
  }

  onSubmit() {
    this.newTask = null;
    this.newErr = null;
    this.addTask(this.formBody);
    this.formBody = { title: "", description: "" }
  }

  addTask(task){
     let obs = this._http.post('/newtask', task);
     obs.subscribe(data => {
        this.newTask = data['newTask'];
        this.newErr  = data['newErr'];
     });

  }

}

