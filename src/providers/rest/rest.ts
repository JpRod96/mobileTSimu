import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  private apiUrlMobile: string = 'http://pruebatsimu.herokuapp.com';
  private example: string='/mailbox';
  private answer: string='/answer'
  private message: string='/loveMessage'
//private apiUrlDevelopment: string = '/mailbox';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  async getMailbox(id:number){
    return new Promise(resolve => {
      this.http.get(this.example+'/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getLoveMessage(){
    return new Promise(resolve => {
      this.http.get(this.apiUrlMobile+this.message).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async postAnswer(answer: string){
    return new Promise(resolve => {
      this.http.post(this.apiUrlMobile+this.answer+'/'+answer,{}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
