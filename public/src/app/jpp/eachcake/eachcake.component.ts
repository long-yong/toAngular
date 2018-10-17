import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-eachcake',
  templateUrl: './eachcake.component.html',
  styleUrls: ['./eachcake.component.css']
})

export class EachcakeComponent implements OnInit {

  formBody: any;

  @Input() curCake: any;
  @Output() _eventEmitter = new EventEmitter();

  sendDataToParent(data:any){
    this._eventEmitter.emit(data);
  }

  constructor(private _httpService: HttpService) {
  }

  clearForm(){
    this.formBody = { star: "3 stars", content: "" }
  }

  ngOnInit() {
    this.clearForm();
  }

  clickDel() {
    let obs = this._httpService.delCake(this.curCake._id);
      obs.subscribe(data => {
      });
    this.clearForm();
  }

  onSubmitRate() {
    let obs = this._httpService.addCmt(this.curCake._id, this.formBody);
    obs.subscribe(data => {
      let cakes = data['allCake'];
      let cake  = data['oneCake'];
      this.clearForm();
    });
  }

}
