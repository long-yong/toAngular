
import { Component, OnInit } from '@angular/core';
import { BppService } from './bpp.service';

@Component({
  selector: 'app-bpp',
  templateUrl: './bpp.component.html',
  styleUrls: ['./bpp.component.css']
})
export class BppComponent implements OnInit {

  constructor(private _bppService: BppService) {  }

  ngOnInit() {
  }

}
