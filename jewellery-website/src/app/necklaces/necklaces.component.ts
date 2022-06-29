import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-necklaces',
  templateUrl: './necklaces.component.html',
  styleUrls: ['./necklaces.component.scss']
})
export class NecklacesComponent implements OnInit {
  Necklace:any

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    this.loadNecklaces()
  }

  goToNecklace(necklace:any){
    this.router.navigateByUrl("/singlenecklace/" + necklace.id)
  }

  loadNecklaces(){
    this.ds.getNecklaces().subscribe((data:{})=>
      this.Necklace=data
    )
    
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
