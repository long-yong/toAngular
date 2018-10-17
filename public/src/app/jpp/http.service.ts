import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){ }

  allCake() {
    return this._http.get('/allcake');
  }

  addCake(body:any) {
    return this._http.post('/addcake', body);
  }

  addCmt(id:number,body:any) {
    return this._http.post('/addcmt/'+id, body);
  }

  delCake(id:number) {
    return this._http.get('/delcake/'+id);
  } 

}
