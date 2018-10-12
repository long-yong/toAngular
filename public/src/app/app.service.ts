
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

    constructor(private _http: HttpClient){
        this.getTasks();
    }

    getTasks(){
        let obs = this._http.get('/tasks');
        obs.subscribe(data => console.log("app.service got tasks:", data));
    }

}