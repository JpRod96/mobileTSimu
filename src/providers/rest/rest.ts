import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  private apiUrlMobile: string = 'http://pruebatsimu.herokuapp.com';
  private example: string='/mailbox';
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

}
