import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-eachcake',
  templateUrl: './eachcake.component.html',
  styleUrls: ['./eachcake.component.css']
})

export class EachcakeComponent implements OnInit {

  cmtBody: any;

  eachOneCake:any;
  eachAllCake:any;

  @Input() eachCake: any; 

  constructor(private _httpService: HttpService) {}

  clearBody(){
    this.cmtBody = { star: "3 stars", content: "" }
  }

  clearCake() {
    this.eachOneCake = null;
    this.eachAllCake = null;
  }

  ngOnInit() {
    this.clearBody();
    this.clearCake();
  }

  clickDel(id:number) {
    let obs = this._httpService.delCake(id);
      obs.subscribe(data => {
        this.eachOneCake = null;
        this.eachAllCake = data['allCake'];
      });
    this.clearBody();
  }

  onSubmitCmt(id:number) {
    let obs = this._httpService.addCmt(id, this.cmtBody);
    obs.subscribe(data => {
      this.eachAllCake = data['allCake'];
      this.eachOneCake = data['oneCake']; 
    });
    this.clearBody();
  }

}
