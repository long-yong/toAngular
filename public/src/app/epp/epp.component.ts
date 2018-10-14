import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.component.html',
  styleUrls: ['./epp.component.css']
})

export class EppComponent implements OnInit {

  title:string;

  formData: any;
  newData: any;
  newErr: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.title = 'epp.component.ts';
    this.formData = { title: "", description: "" }
    this.newData = null;
    this.newErr = null;
  }

  onSubmit() {
    this.newData = null;
    this.newErr = null;
    this.addTask(this.formData);
    this.formData = { title: "", description: "" }
  }

  addTask(task){
     let obs = this._http.post('/newtask', task);
     obs.subscribe(data => {
        this.newData = data['newData'];
        this.newErr  = data['newErr'];
     });

  }

}

