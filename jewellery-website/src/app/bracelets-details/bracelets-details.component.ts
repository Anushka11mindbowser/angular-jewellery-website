import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bracelets-details',
  templateUrl: './bracelets-details.component.html',
  styleUrls: ['./bracelets-details.component.scss']
})
export class BraceletsDetailsComponent implements OnInit {

  constructor(private ds:DataService, private ar:ActivatedRoute) { }
  id:any
  singleBracelet!:any
  bracelet:any

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.ds.getSingleBracelet(this.id).subscribe((data:{})=>{
      this.singleBracelet = data
      console.log(this.singleBracelet)

     

    })

}

wishlist(bracelet:any){

this.ds.addToWishlist(bracelet).subscribe((res:any)=>{
  console.log(res)

});

}

cart(bracelet:any){
  this.ds.addToCart(bracelet).subscribe((res:any)=>{
    console.log(res)
  })
}



}
