import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fpp',
  templateUrl: './fpp.component.html',
  styleUrls: ['./fpp.component.css']
})

export class FppComponent implements OnInit {

  ID: number;
  editShow: boolean;
  allTask: any;

  newBody: any;
  newErr: any;
  
  editBody: any;
  editErr: any;

  constructor(private _http: HttpClient) { }

  clearErr() {
    this.newErr = null;
    this.editErr = null;
  }

  notExist(err:any) {
    if(err==undefined) return true;
    if(err==null) return true;
    return false;
  }

  setId(id:number) {
    this.ID = id;
    this.editShow = true;
    if(id==0) this.editShow = true;
  }

  ngOnInit() {
    this.setId(1);
    this.clearErr();
    this.newBody = { title: "", description: "" }
    this.editBody = { title: "", description: "" }
    this.getAllTask();
  }

  // all task

  getAllTask() {
    this.allTask = null;
    let obs = this._http.get('/alltask');
    obs.subscribe(data => {
      this.allTask = data['allTask'];
    });
  }

  // new task

  onSubmitAdd() {
    this.clearErr();
    this.addTask(this.newBody);
    this.newBody = { title: "", description: "" }
    this.editBody = { title: "", description: "" }
  }

  addTask(body){
     let obs = this._http.post('/addtask', body);
     obs.subscribe(data => {
        this.newErr = data['errArr' ];
        if(this.notExist(this.newErr))
          this.allTask = data['allTask'];
     });
  }

  // edit task

  onSubmitEdit(id:number) {
    if(this.ID==0) return;
    this.clearErr();
    this.editTask(this.editBody);
    this.newBody = { title: "", description: "" }
    this.editBody = { title: "", description: "" }
  }

  editTask(body:any) {
    let obs = this._http.post('/edittask/' + this.ID, body);
    obs.subscribe(data => {
      this.editErr  = data['errArr'];
      if(this.notExist(this.editErr))
          this.allTask = data['allTask'];
    });
  }

  // click eidt
  clickEdit(id:number) {

  }

  // click delete
  clickDel(id:number) {
    let obs = this._http.get('/deltask/' + id);
    obs.subscribe(data => {
      this.editErr  = data['errArr'];
      if(this.notExist(this.editErr))
          this.allTask = data['allTask'];
    });
    this.setId(0);
  }

}
