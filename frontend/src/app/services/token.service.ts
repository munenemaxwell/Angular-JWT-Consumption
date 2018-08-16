import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() { }

  saveToken(data) {

    localStorage.setItem('access_token',data.access);
    localStorage.setItem('refresh_token',data.refresh);
   

  }

  deleteToken(){

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');


  }
  getToken():string{

    return localStorage.getItem('access_token');
  }
}
