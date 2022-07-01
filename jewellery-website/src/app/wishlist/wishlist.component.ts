import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private ds:DataService, private ar:ActivatedRoute) { }
  wishlist1:any

  ngOnInit(): void {
    this.loadWishlist()
  }

  loadWishlist(){
    this.ds.getWishlist().subscribe((data:{})=>
    this.wishlist1=data)
    console.log(this.wishlist1)
  }
  
 

  cart(item:any){
    this.ds.addToCart(item).subscribe((res:any)=>
    {
      console.log(res)
    })
  };

  

  removeWishlist(item:any){
    this.ds.removeWishlistItem(item).subscribe((res:any)=>{
      console.log(res)
    })

  }




}
