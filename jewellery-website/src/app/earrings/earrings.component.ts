import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-earrings',
  templateUrl: './earrings.component.html',
  styleUrls: ['./earrings.component.scss']
})
export class EarringsComponent implements OnInit {
  Earrings:any
  id:any
  singleEarring!:any

  constructor(private ds:DataService, private ar:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

   this.loadEarrings()

}


goToEarrings(singleEarring:any){
  this.router.navigateByUrl("/singleearring/" + singleEarring.id )
}

loadEarrings(){
  this.ds.getEarrings().subscribe((data:{})=>
  this.Earrings=data)
  console.log(this.Earrings)
}


wishlist(earring:any){
  this.ds.addToWishlist(earring).subscribe(
    (res: any) => {
      console.log(res);
    }
  );

  }      

cart(earring:any){
  this.ds.addToCart(earring).subscribe((res:any)=>
  {
    console.log(res)
  })
};

}

