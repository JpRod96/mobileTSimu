import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ModalController, NavParams } from 'ionic-angular';
import {ConfirmationPage } from './../confirmation/confirmation'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  json:any;
  label:string;
  label1:string;

  constructor(public navCtrl: NavController,
              private restProvider: RestProvider,
              public modalCtrl: ModalController) {
    
  }

  private chargeExample(){
    this.restProvider.getMailbox(1)
    .then(data => {
      this.label1 = JSON.stringify(data);
      console.log(data);
    });
  }

  async getMessage(){
    let callback1=()=>{this.positiveAnswer()};
    let callback2=()=>{this.negativeAnswer()};
    const confirmationModal = this.modalCtrl.create(ConfirmationPage,{callbackYes:callback1, callbackNo:callback2});
    confirmationModal.present();
  }

  private negativeAnswer(){
    this.restProvider.postAnswer("NO")
    .then(data => {
      console.log(data);
    });
  }

  private positiveAnswer(){
    this.restProvider.postAnswer("SIIII")
    .then(data => {
      console.log(data);
    });
  }
}
