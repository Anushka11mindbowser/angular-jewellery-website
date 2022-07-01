import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private ds:DataService) { }

  cart:any
  op=0;
  
 

  cartItemsList:any=[]
 
  

  ngOnInit(): void {
  
  this.loadCart()
    
    
    
    
    

  }


  loadCart(){
    this.ds.getCart().subscribe((data)=>{
      this.cart = data
    })
  }


 
  
   




}

