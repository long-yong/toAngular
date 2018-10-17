import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hpp',
  templateUrl: './hpp.component.html',
  styleUrls: ['./hpp.component.css']
})

export class HppComponent implements OnInit {

  allCake: any;
  curCake: any;
  newBody: any;
  cmtBody: any;
  newErr:  any;

  constructor(private _http: HttpClient) { }

  notErr(err:any) {
    if(err==undefined) return true;
    if(err==null) return true;
    return false;
  }

  clearCake(){
    this.curCake = null;
    this.allCake = null;
  }

  clearFormErr() {
    this.newBody = { title: "", description: "" }
    this.cmtBody = { star: "3 stars", content: "" }
    this.newErr = null;
  }

  getAvgStar(){
    if(this.curCake==null) return;
    let sum = 0, N = 0, cmts = this.curCake.comments;
    for(let i in cmts) { N++; sum+=parseInt(cmts[i].star.charAt(0)); }
    if(N>1) { sum/=N; sum=Math.floor(sum*100)/100; }
    this.curCake.avgStar = sum;
  }

  ngOnInit() {
    this.clearFormErr();
    this.clearCake();
    this.getAllCake();
  }

  getAllCake() {
    let obs = this._http.get('/allcake');
    obs.subscribe(data => {
      this.allCake = data['allCake'];
    });
  }

  onSubmitAdd() {
    this.addCake(this.newBody);
  }

  addCake(body){
    let obs = this._http.post('/addcake', body);
    obs.subscribe(data => {
      this.clearFormErr();
       this.newErr = data['errArr' ];
       if(this.notErr(this.newErr)) {
         this.curCake = null;
         this.allCake = data['allCake'];
       }
    });
  }

  onSubmitCmt(id:number) {
    let obs = this._http.post('/addcmt/'+id, this.cmtBody);
    obs.subscribe(data => {
      this.allCake = data['allCake'];
      this.curCake = data['oneCake']; 
      this.getAvgStar();
      this.clearFormErr();
    });    
  }

  clickImg(cake:any) {
    this.curCake = cake; 
    this.getAvgStar();
    this.clearFormErr();
  }  

  clickDel(id:number) {
    let obs = this._http.get('/delcake/'+id);
      obs.subscribe(data => {
        this.curCake = null;
        this.allCake = data['allCake'];
        this.clearFormErr();
      });   
  }

}

