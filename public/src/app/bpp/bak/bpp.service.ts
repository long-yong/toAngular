
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BppService {

  constructor(private _http: HttpClient){
    this.getTasks();
  }

  getTasks(){
    let obs = this._http.get('/tasks');
    obs.subscribe(data => console.log("bpp.service got tasks:", data));
  }
}
