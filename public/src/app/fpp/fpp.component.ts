import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fpp',
  templateUrl: './fpp.component.html',
  styleUrls: ['./fpp.component.css']
})

export class FppComponent implements OnInit {

  allTask: any;
  editShow: boolean;

  newBody: any;
  newTask: any;
  newErr: any;
  
  editBody: any;
  editTask: any;
  editErr: any;

  constructor(private _http: HttpClient) { }

  clear_attr() {
    this.newTask = null;
    this.newErr = null;
    this.editTask = null;
    this.editErr = null;
  }

  ngOnInit() {
    this.clear_attr();
    this.allTask = null;
    this.editShow = true;
    this.newBody = { title: "", description: "" }
    this.editBody = { title: "", description: "" }
  }

  // new task

  onSubmit() {
    this.clear_attr();
    this.createTask(this.newBody);
    this.newBody = { title: "", description: "" }
  }

  createTask(body){
     let obs = this._http.post('/newtask', body);
     obs.subscribe(data => {
        this.newTask = data['newTask'];
        this.newErr  = data['newErr'];
     });
  }

  // edit task

  onSubmit2() {
    this.clear_attr();
    this.updateTask(this.editBody);
    this.editBody = { title: "", description: "" }
  }

  updateTask(body){
    let obs = this._http.post('/newtask', body);
    obs.subscribe(data => {
       this.editTask = data['newTask'];
       this.editErr  = data['newErr'];
    });

 }

}
