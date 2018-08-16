import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetproductsService {

  public headers: any;
  public url :string ='http://localhost:8000/products/';

  constructor(
    private http:HttpClient,
    private tokenservice: TokenService
  
  ) {
     
    let token :string =this.tokenservice.getToken();
    this.headers={
      headers: new HttpHeaders({'Authorization':'Bearer '+token})
    }
  }

  public get_products():Observable<any>{

    return this.http.get(this.url,this.headers);

  }

  post_product(){

  }


}
