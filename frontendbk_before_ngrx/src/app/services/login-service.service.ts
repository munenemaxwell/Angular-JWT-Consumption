import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 public headers: any;
 

  constructor(private http :HttpClient ) {

    this.headers={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
  }

  login(data):Observable<any> {

    return this.http.post('http://localhost:8000/api/token/',JSON.stringify(data),this.headers)

  }
}
