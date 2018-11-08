import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  json:any;
  label:string;
  label1:string;

  constructor(public navCtrl: NavController,
              private restProvider: RestProvider) {
    this.label = "oi";
    this.chargeExample();
  }

  private chargeExample(){
    this.restProvider.getMailbox(1)
    .then(data => {
      this.label1 = JSON.stringify(data);
      console.log(data);
    });
  }
}
