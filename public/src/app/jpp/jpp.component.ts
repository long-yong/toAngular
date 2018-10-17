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
  formErr:  any;
  
  constructor(private _httpService: HttpService) { }
  notErr(err:any) { if(err==undefined||err==null) return true; return false;  }
  clearFormErr()  { this.formErr=null;  this.formBody = { title: "", description: "" } }
  clearCake()     { this.curCake=null;  this.allCake=null;  }
  
  ngOnInit() {
    this.clearFormErr();
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
    this.addCake(this.formBody);
  }

  addCake(body){
    let obs = this._httpService.addCake(body);
    obs.subscribe(data => {
      this.clearFormErr();
      this.formErr = data['errArr' ];
       if(this.notErr(this.formErr)) {
          this.allCake = data['allCake'];
          this.curCake = data['oneCake'];
       }
    });
  }

  clickImg(cake:any) {
    this.curCake = cake;
    this.clearFormErr();
  }

  dataFromChild(emitArr){
    this.allCake = emitArr[0];
    this.curCake = emitArr[1];
  }

}
