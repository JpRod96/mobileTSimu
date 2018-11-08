import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  private apiUrl: string = 'http://pruebatsimu.herokuapp.com';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  async getMailbox(id:number){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/mailbox/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
