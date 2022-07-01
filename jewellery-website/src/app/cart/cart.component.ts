import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:any

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    this.loadCart()
  }

  goToCheckout(){
    this.router.navigateByUrl("/checkout")
  }

  loadCart(){
    this.ds.getCart().subscribe((data:{})=>
    this.cart=data)
    console.log(this.cart)
  }

  removeCart(item:any){
    this.ds.removeCartItem(item).subscribe((res:any)=>{
      console.log(res)
    })

  }

 
}
