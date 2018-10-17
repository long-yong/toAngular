import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-onecake',
  templateUrl: './onecake.component.html',
  styleUrls: ['./onecake.component.css']
})

export class OnecakeComponent implements OnInit {

  @Input() curCake: any; 

  constructor(private _httpService: HttpService) {}

  ngOnInit() { }

}
