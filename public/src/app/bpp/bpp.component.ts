
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
     
@Component({
  selector: 'app-bpp',
  templateUrl: './bpp.component.html',
  styleUrls: ['./bpp.component.css']
})
     
export class BppComponent implements OnInit {

  counter:number;

  num: number;
  randNum: number;
  str: string;
  first_name: string;

  snacks: string[];
  loggedIn: boolean;

  tasks=null;

    constructor(private _http: HttpClient) {
      // this.getTasks();
    }

  ngOnInit() {
    this.counter =0; 
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 10 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';

    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;

    this.getTasks();

  }

  getTasks() {
    let obs = this._http.get('/tasks');
    obs.subscribe(data => { 
      this.tasks = data['taskkey'];
    });
  }

  clickCounter(){
    this.counter++;
  }

}   