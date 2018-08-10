import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form  ={
    name:null,
    email:null,
    password:null,
    password_confirmation:null,
    mobile_number:null
    
  }

  public error  =null;

  constructor(private http : HttpClient) { }

  onsubmit(){

    return this.http.post('http://localhost:8000/api/register',this.form).subscribe(
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
