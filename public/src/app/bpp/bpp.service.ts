import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BppService {

  constructor(private _http: HttpClient){
    this.getPokemon();
  }

  getPokemon(){
    let obs1 = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    obs1.subscribe(data => {
        let name = data['abilities'][0]['ability']['name'];
        let url = data['abilities'][0]['ability']['url'];
        let obs2 = this._http.get(url)
        obs2.subscribe(data => {
        console.log('bpp.service got pokemons:',data);
        console.log(data['pokemon'].length + ' pokemons have the ability of '+name);
        });
    });
  }
}
