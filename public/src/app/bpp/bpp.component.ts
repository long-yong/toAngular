
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
     
@Component({
  selector: 'app-bpp',
  templateUrl: './bpp.component.html',
  styleUrls: ['./bpp.component.css']
})
     
export class BppComponent implements OnInit {

  title:string;

  name: string;
  randNum: number;  
  snacks: string[];
  loggedIn: boolean;

  counter:number;

  allTask = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {

    this.title = 'bpp.component.ts';
    this.name = 'Alpha';    
    this.randNum = Math.floor( (Math.random()  * 10 ) + 1);
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
    this.counter = 0;
    this.allTask = [];
    this.getAllTask();

  }

  getAllTask() {
    let obs = this._http.get('/alltask');
    obs.subscribe(data => {
      this.allTask = data['allTask'];
    });
  }

  clickCounter(){
    this.counter++;
  }

}   