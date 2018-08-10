import { Injectable } from '@angular/core';
import { Router} from "@angular/router";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router : Router, private tokenservice : TokenService) { }

  logout(){
    this.tokenservice.deleteToken();
    this.router.navigate(['/login']);
  }
}
