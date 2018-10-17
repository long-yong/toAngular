import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-jpp',
  templateUrl: './jpp.component.html',
  styleUrls: ['./jpp.component.css']
})

export class JppComponent implements OnInit {

  allCake:  any;
  curCake:  any;
  formBody: any;
  newErr:   any; 
  
  constructor(private _httpService: HttpService) {}

  dataFromChild(eventData){
    console.log(eventData);
  }

  notErr(err:any) {
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

  clearForm() {
    this.formBody = { title: "", description: "" }
  }

  ngOnInit() {
    this.clearErr();
    this.clearForm();
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
    this.addCake(this.formBody);
    this.clearForm();
  }

  addCake(body){
    let obs = this._httpService.addCake(body);
    obs.subscribe(data => {
      this.newErr = data['errArr' ];
       if(this.notErr(this.newErr)) {
          this.curCake = data['oneCake'];
          this.allCake = data['allCake'];
       }
    });
  }

  clickImg(cake:any) {
    this.curCake = cake;
    this.clearForm();
    this.clearErr();
  }


}
