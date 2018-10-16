import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hpp',
  templateUrl: './hpp.component.html',
  styleUrls: ['./hpp.component.css']
})

export class HppComponent implements OnInit {

  allCake: any;
  oneCake: any;
  newBody: any;
  newErr:  any;  
  cmtBody: any;

  constructor(private _http: HttpClient) { }

  notExist(err:any) {
    if(err==undefined) return true;
    if(err==null) return true;
    return false;
  }

  clearErr() {
    this.newErr = null;
  }

  clearCake(){
    this.oneCake = null;
    this.allCake = null;
  } 

  clearBody() {
    this.newBody = { title: "", description: "" }
    this.cmtBody = { star: "3 stars", content: "" }
  }

  getAvgStar(){
    if(this.oneCake==null) return;
    let sum = 0, N = 0, cmts = this.oneCake.comments;
    for(let i in cmts) { N++; sum+=parseInt(cmts[i].star.charAt(0)); }
    if(N>1) { sum/=N; sum=Math.floor(sum*100)/100; }
    this.oneCake.avgStar = sum;
  }

  ngOnInit() {
    this.clearErr();
    this.clearBody();
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
    this.clearErr();
    this.addCake(this.newBody);
    this.clearBody();
  }

  addCake(body){
    let obs = this._http.post('/addcake', body);
    obs.subscribe(data => {
       this.newErr = data['errArr' ];
       if(this.notExist(this.newErr)) {
         this.oneCake = null;
         this.allCake = data['allCake'];
       }
    });
  }

  onSubmitCmt(id:number) {
    let obs = this._http.post('/addcmt/'+id, this.cmtBody);
    obs.subscribe(data => {
      this.allCake = data['allCake'];
      this.oneCake = data['oneCake']; 
      this.getAvgStar();
    });
    this.clearBody();
    this.clearErr();
  }

  clickImg(cake:any) {
    this.oneCake = cake; 
    this.getAvgStar();
    this.clearBody();
    this.clearErr();
  }  

  clickDel(id:number) {
    let obs = this._http.get('/delcake/'+id);
      obs.subscribe(data => {
        this.oneCake = null;
        this.allCake = data['allCake'];
      });   
    this.clearBody();
    this.clearErr(); 
  }

}

