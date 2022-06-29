import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-necklace-details',
  templateUrl: './necklace-details.component.html',
  styleUrls: ['./necklace-details.component.scss']
})
export class NecklaceDetailsComponent implements OnInit {

  constructor(private ds:DataService, private ar:ActivatedRoute) { }

  id:any
  singleNecklace:any
  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
     this.ds.getSingleNecklace(this.id).subscribe((data:{})=>{
      this.singleNecklace = data
      console.log(this.singleNecklace)

     

    })
  }

  wishlist(necklace:any){
    this.ds.addToWishlist(necklace).subscribe(
      (res: any) => {
        console.log(res);
      }
    );

    }

  cart(necklace:any){
    this.ds.addToCart(necklace).subscribe((res:any)=>
    {
      console.log(res)
    })
  };




}
