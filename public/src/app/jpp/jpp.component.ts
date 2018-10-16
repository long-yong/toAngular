import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-jpp',
  templateUrl: './jpp.component.html',
  styleUrls: ['./jpp.component.css']
})

export class JppComponent implements OnInit {

  allCake: any;
  curCake: any;
  newBody: any;
  newErr:  any;  

  constructor(private _httpService: HttpService) {}

  notExist(err:any) {
    if(err==undefined) return true;
    if(err==null) return true;
    return false;
  }

  clearErr() {
    this.newErr = null;
  }

  clearCake(){
    this.curCake = null;
    this.allCake = null;
  }

  clearBody() {
    this.newBody = { title: "", description: "" }
  }

  ngOnInit() {
    this.clearErr();
    this.clearBody();
    this.clearCake();
    this.getAllCake();
  }

  getAllCake() {
    let obs = this._httpService.allCake();
    obs.subscribe(data => {
      this.allCake = data['allCake'];
    });
  }

  onSubmitAdd() {
    this.clearErr();
    this.addCake(this.newBody);
    this.clearBody();
  }

  addCake(body){
    let obs = this._httpService.addCake(body);
    obs.subscribe(data => {
      this.newErr = data['errArr' ];
       if(this.notExist(this.newErr)) {
         this.curCake = null;
         this.allCake = data['allCake'];
       }
    });
  }

  clickImg(cake:any) {
    this.curCake = cake; 
    this.clearBody();
    this.clearErr();
  }


}
