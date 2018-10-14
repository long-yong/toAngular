import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpp',
  templateUrl: './dpp.component.html',
  styleUrls: ['./dpp.component.css']
})

export class DppComponent implements OnInit {

  title:string;
  totalGold:number;
  activities:string[];

  constructor() { }

  ngOnInit() {
    this.title = 'dpp.component.ts';
    this.totalGold = 0;
    this.activities = [];
  }

  clickAddGold(place:string,n0:number,n1:number) {
    let n = n1 - n0;
    let randnum = Math.floor(Math.random()*(n+1))+n0;
    if(this.totalGold+randnum<0) randnum=-this.totalGold;
    this.totalGold += randnum;
    let str = 'You';
    if(randnum>=0) str += ' Earn ' + randnum;
    else           str += ' Lost ' + (-randnum);
    str += ' gold at the ' + place;
    this.activities.push(str);
  }

}
