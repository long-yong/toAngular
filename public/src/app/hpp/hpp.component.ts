import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hpp',
  templateUrl: './hpp.component.html',
  styleUrls: ['./hpp.component.css']
})

export class HppComponent implements OnInit {

  allTask: any;
  oneTask: any;

  newBody: any;
  newErr:  any;
  
  rateBody: any;
  curUrl: string;

  constructor(private _http: HttpClient) { }

  notExist(err:any) {
    if(err==undefined) return true;
    if(err==null) return true;
    return false;
  }

  ngOnInit() {
    this.newBody = { title: "", description: "" }
    this.rateBody = { rate: "1 star", content: "" }
    this.newErr = null;
    this.getAllTask();
    this.curUrl='http://oi41.tinypic.com/1q0hw9.jpg';
  }

  getAllTask() {
    this.oneTask = null;
    this.allTask = null;
    let obs = this._http.get('/alltask');
    obs.subscribe(data => {
      this.allTask = data['allTask'];
    });
  }

  onSubmitAdd() {
    this.newErr = null;
    this.addTask(this.newBody);
    this.newBody = { title: "", description: "" }
    
  }

  addTask(body){
    let obs = this._http.post('/addtask', body);
    obs.subscribe(data => {
       this.newErr = data['errArr' ];
       if(this.notExist(this.newErr)) {
         this.allTask = data['allTask'];
         this.oneTask = null;
       }
    });
  }

  onSubmitRate(id:number) {
    let obs = this._http.post('/addcomment/'+id, this.rateBody);
     obs.subscribe(data => {
        this.oneTask = data['oneTask'];
     });
  }

  clickImg(task:any) {
    this.oneTask = task;
  }

}

