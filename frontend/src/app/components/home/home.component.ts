import { Component, OnInit } from '@angular/core';
import { GetproductsService } from '../../services/getproducts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products:any;
  public error:any;

  constructor(private getproduct:GetproductsService) {
     
    this.getproduct.get_products().subscribe(
      data => this.products=data,
      error =>console.log(error)//this.error=error
    )

   }

  ngOnInit() {
  }

}
