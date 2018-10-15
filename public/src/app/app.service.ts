
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

    constructor(private _http: HttpClient){
        this.getTasks();
        this.getPokemon();
    }

    getTasks(){
        let obs = this._http.get('/allTask');
        obs.subscribe(data => console.log("app.service got tasks:", data['allTask']));
    }

    getPokemon(){
        let obs1 = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        obs1.subscribe(data => {
            let name = data['abilities'][0]['ability']['name'];
            let url = data['abilities'][0]['ability']['url'];
            let obs2 = this._http.get(url)
            obs2.subscribe(data => {
            console.log('app.service got pokemons:',data);
            console.log(data['pokemon'].length + ' pokemons have the ability of '+name);
            });
        });
      }

}