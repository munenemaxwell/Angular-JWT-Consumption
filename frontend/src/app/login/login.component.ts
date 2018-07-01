import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form={
    email:'',
    password:''
  }

  public error=null;

  aimsuser: object;

  constructor(private http : HttpClient) { }

  onsubmit(){

    return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
      data => console.log(data), // this.aimsuser=data,
      error => this.handle_error(error)
    );

  }

  handle_error(error){
    this.error=error.error.error
  }

  ngOnInit() {
    
  }

}
