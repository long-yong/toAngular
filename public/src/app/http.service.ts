
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

    constructor(private _http: HttpClient){
        this.getTasks();
        this.getPokemon();
    }

    getTasks(){
        let tempObservable = this._http.get('/tasks');
        tempObservable.subscribe(data => console.log("Got tasks:", data));
     }

     getPokemon(){
        let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        pokemon.subscribe(data => console.log("Got pokemon:", data));
    }

}
