import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css']
})
export class CppComponent implements OnInit {

  title:string;
  allTask;
  oneTask;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.title = 'cpp.component.ts';
    this.allTask= null;
    this.oneTask= null;
    this.all_Task();
  }

  all_Task() {
    let obs = this._http.get('/alltask');
    obs.subscribe(data => {
      this.allTask = data['allTask'];
    });
  }

  clickShow(id:number){
    let obs = this._http.get('/onetask/'+id);
    obs.subscribe(data => {
      this.oneTask = data['oneTask'];
    });
  }

}
