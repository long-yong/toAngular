import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'app.component.ts';
  
  constructor(private _appService: AppService){};


  foo() {
    this._appService.getTasks();
  }

}

