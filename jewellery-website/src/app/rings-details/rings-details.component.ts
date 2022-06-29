import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rings-details',
  templateUrl: './rings-details.component.html',
  styleUrls: ['./rings-details.component.scss']
})
export class RingsDetailsComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private ds:DataService) { }

id:any
singleRing:any



  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.ds.getSingleRing(this.id).subscribe((data)=>{
      this.singleRing = data
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
