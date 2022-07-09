import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private ds:DataService) { }
  coupon_code:any;
  cart:any
  op=0;
  dp=0;
  coupons:any
  total=0;
  discount = 0;
  saved_price = 0;
  final_price = 0
  coupon_value = document.getElementById("basic-addon2")
 earring_total=0
  necklace_total:any
  ring_total:any
  bracelet_total:any
  
 

  cartItemsList:any=[]
 
  

  ngOnInit(): void {
  
  this.loadCart()
  this.loadCoupons()
  console.log(this.coupon_code)
  
  
 
    
    
    

  }

  getDiscountCost(cart:any){
    for (let c of cart)
    {

      this.discount += parseInt(c.dp)
    }
    console.log(this.discount)
  }

  getTotalCost(cart:any){
    for (let c of cart)
    {

      this.total += parseInt(c.op)
    }
    console.log(this.total)
  }

  SavedPrice(op:any,dp:any){
    this.saved_price = op - dp
  }

  loadCart(){
    this.ds.getCart().subscribe((data)=>{
      this.cartItemsList = data
      console.log(data)
      this.getTotalCost(this.cartItemsList)
      this.getDiscountCost(this.cartItemsList)
      this.SavedPrice(this.total, this.discount)
    })
  }

  loadCoupons(){
    this.ds.getCoupons().subscribe((data)=>{
      this.coupons = data
    })
  }


    


  applyCoupon(coup:any){
    switch(coup){
      case 'EAR00010':{
        for (let c in this.cartItemsList){}
      let dis = (10/100)*(this.discount)
      let fp = this.discount - dis
      console.log(fp)
      break;
      }
        case 'NEC00020':{
          let dis = (20/100)*(this.discount)
          let fp = this.discount - dis
          console.log(fp)
          break;
        }

        case 'RIN00015':{
          let dis = (15/100)*(this.discount)
          let fp = this.discount - dis
          console.log(fp)
          break;

    }

    case 'BR000015':{
      let dis = (15/100)*(this.discount)
      let fp = this.discount - dis
      console.log(fp)
      break;

}
default:{
  alert("Invalid Coupon")
}
    
  
  }
}
 
  
   




}