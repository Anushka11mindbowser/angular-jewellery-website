import { Component, OnInit } from '@angular/core';
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

  constructor(private dataservice:DataService) { }

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






}