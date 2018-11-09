import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  callbackYes;
  callbackNo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callbackYes=navParams.get("callbackYes");
    this.callbackNo=navParams.get("callbackNo");
  }

  continue(){
    console.log("entrando Si");
    this.callbackYes();
    this.navCtrl.pop();
  }

  dismiss(){
    console.log("entrando No");
    this.callbackNo();
    this.navCtrl.pop();
  }

}
