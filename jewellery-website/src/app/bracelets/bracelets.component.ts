import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'popper.js';
import { DataService } from '../data.service';


@Component({
  selector: 'app-bracelets',
  templateUrl: './bracelets.component.html',
  styleUrls: ['./bracelets.component.scss']
})
export class BraceletsComponent implements OnInit {
  Bracelets:any

  constructor(private ds:DataService, private router:Router) { }


  ngOnInit(): void {

    this.loadBracelets()
  }

  goToBracelet(bracelet:any){
    this.router.navigateByUrl("/singlebracelet/" + bracelet.id)
  }

  loadBracelets(){
    this.ds.getBracelets().subscribe((data:{})=>
    this.Bracelets=data)
    console.log(this.Bracelets)

  }

  wishlist(bracelet:any){
    this.ds.addToWishlist(bracelet).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  
    }
  
  cart(bracelet:any){
    this.ds.addToCart(bracelet).subscribe((res:any)=>
    {
      console.log(res)
    })
  };

}
