import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid-jewel',
  templateUrl: './grid-jewel.component.html',
  styleUrls: ['./grid-jewel.component.scss']
})
export class GridJewelComponent implements OnInit {
  Jewellery:any
  Bracelets:any
  Necklaces:any
  Earrings:any
  Rings:any
  singleEarring:any

  constructor(private dataservice:DataService, private router:Router) { }

  ngOnInit(): void {
    this.loadJewellery()
    this.loadBracelets()
    this.loadNecklaces()
    this.loadEarrings()
    this.loadRings()
    // loadSingleNecklace()
  }

  loadJewellery(){
    return this.dataservice.getJewellery().subscribe((data:{})=>{
      this.Jewellery = data
    })
  }

  loadNecklaces(){
    this.dataservice.getNecklaces().subscribe((data:{})=>{
      this.Necklaces=data
      console.log()
  })
    
  }

  loadBracelets(){
    this.dataservice.getBracelets().subscribe((data:{})=>{
    this.Bracelets=data})
  }
    

  

  loadEarrings(){
    this.dataservice.getEarrings().subscribe((data:{})=>
  this.Earrings=data)
  console.log(this.Earrings)
   }

loadRings(){
  this.dataservice.getRings().subscribe((data:{})=>
  this.Rings=data)
}

wishlist(ring:any){
  this.dataservice.addToWishlist(ring).subscribe(
    (res: any) => {
      console.log(res);
    }
  );

  }

cart(ring:any){
  this.dataservice.addToCart(ring).subscribe((res:any)=>
  {
    console.log(res)
  })
};


goToRings(ring:any){
  this.router.navigateByUrl("/singlering/" + ring.id)
}

goToBracelets(bracelet:any){
  this.router.navigateByUrl("/singlebracelet/" + bracelet.id)
}


goToNecklace(necklace:any){
  this.router.navigateByUrl("/singlenecklace/" + necklace.id)
}

goToEarrings(earring:any){
  this.router.navigateByUrl("/singleearring/" + earring.id)
}


}