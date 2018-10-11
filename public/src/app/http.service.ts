
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

    constructor(private _http: HttpClient){
        // this.getTasks();
        this.getPokemon();
    }

    getTasks(){
        let tempObservable = this._http.get('/tasks');
        tempObservable.subscribe(data => console.log("Got tasks:", data));
    }

    getPokemon(){
        let obj1 = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        obj1.subscribe(data => { 
            let name = data['abilities'][0]['ability']['name'];
            let url = data['abilities'][0]['ability']['url'];
            let obj2 = this._http.get(url)
            obj2.subscribe(data => {
            console.log('get pokemon:',data);
            console.log(data['pokemon'].length + ' pokemons have the ability of '+name);
            });
        });
    }

}