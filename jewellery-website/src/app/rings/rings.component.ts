import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss']
})
export class RingsComponent implements OnInit {
  Rings:any

  constructor(private ds:DataService, private router:Router) { 

  }

  ngOnInit(): void {
    this.loadRings()
  }

  goToRings(ring:any){
    this.router.navigateByUrl("/singlering/" + ring.id)
  }

  loadRings(){
    this.ds.getRings().subscribe((data:{})=>
    {
      this.Rings=data
    })
  }

  wishlist(ring:any){
    this.ds.addToWishlist(ring).subscribe(
      (res: any) => {
        console.log(res);
      }
    );

    }

  cart(ring:any){
    this.ds.addToCart(ring).subscribe((res:any)=>
    {
      console.log(res)
    })
  };





}
