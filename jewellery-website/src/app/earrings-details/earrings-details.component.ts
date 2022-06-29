import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Earring } from '../Earring';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-earrings-details',
  templateUrl: './earrings-details.component.html',
  styleUrls: ['./earrings-details.component.scss']
})
export class EarringsDetailsComponent implements OnInit {

  constructor(private ds:DataService, private ar:ActivatedRoute,private router:Router, private http:HttpClient) { }
  id:any
  er:any
  singleEarring!:any
  cart_earring:any
  

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
     this.ds.getSingleEarrings(this.id).subscribe((data:{})=>{
      this.singleEarring = data
      console.log(this.singleEarring)

     

    })
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

 

    


      
  
  


  


