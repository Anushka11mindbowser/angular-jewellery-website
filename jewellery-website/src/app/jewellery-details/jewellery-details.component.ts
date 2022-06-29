import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jewellery-details',
  templateUrl: './jewellery-details.component.html',
  styleUrls: ['./jewellery-details.component.scss']
})
export class JewelleryDetailsComponent implements OnInit {

  constructor(private ds:DataService, private ar:ActivatedRoute) {}
  jewel:any
  j_id:any
  
  


 


  singleProduct!:any;
  ngOnInit(): void {
    this.j_id = this.ar.snapshot.params['id']

    this.ds.getSingleJewellery(this.j_id).subscribe(data=>{
      this.singleProduct = data
      console.log("single product",this.singleProduct)
    })
  }

}
