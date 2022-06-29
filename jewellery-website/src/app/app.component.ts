import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  jewellery: any;
  constructor(private http:HttpClient, private router:Router){}
  
  ngOnInit(): void {
    this.http.get("http://localhost:3000/jewellery").subscribe(
      (res:any) => {
        console.log(res);
        this.jewellery = res;
      }
    );;
    console.log(Array.isArray(this.jewellery))
    this.jewellery
  }


  goToWishlist(){
    this.router.navigateByUrl("/wishlist")
  }

  goToCart(){
    this.router.navigateByUrl("/cart")
  }

}
