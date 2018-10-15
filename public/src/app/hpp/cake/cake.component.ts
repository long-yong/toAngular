import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  curUrl:string;

  @Input() taskToShow: any; 

  constructor() { }

  ngOnInit() {
    this.curUrl='http://oi41.tinypic.com/1q0hw9.jpg';
  }

}
