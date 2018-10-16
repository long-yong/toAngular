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
    this.getAllCake();
    this.curUrl='http://oi41.tinypic.com/1q0hw9.jpg';
  }

  getAllCake() {
    this.oneCake = null;
    this.allCake = null;
    let obs = this._http.get('/allcake');
    obs.subscribe(data => {
      this.allCake = data['allCake'];
    });
  }

  onSubmitAdd() {
    this.newErr = null;
    this.addCake(this.newBody);
    this.newBody = { title: "", description: "" }
    
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

  clickImg(cake:any) {
    this.oneCake = cake;
  }

  onSubmitCmt(id:number) {
    let obs = this._http.post('/addcmt/'+id, this.rateBody);
     obs.subscribe(data => {
        this.oneCake = data['oneCake'];
     });
  }

  clickDel(id:number) {
    console.log('1-----')
    let obs = this._http.get('/delcake/'+id);
     obs.subscribe(data => {
      console.log('2-----')
        this.oneCake = null;
        this.allCake = data['allCake'];
     });
  }

}

