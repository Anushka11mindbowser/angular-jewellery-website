import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Jewel} from 'src/app/Jewel';
import { Earring} from 'src/app/Earring'
import { Bracelet } from './Bracelet';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {


   
  j_url="http://localhost:3000/jewellery"
  b_url="http://localhost:3000/bracelets"
  n_url = "http://localhost:3000/necklaces"
  e_url = "http://localhost:3000/earrings"
  r_url = "http://localhost:3000/ring"
  w_url = "http://localhost:3000/wishlist"
  c_url = "http://localhost:3000/cart"

  constructor(private http:HttpClient, private ar:ActivatedRoute) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }

  getJewellery():Observable<Jewel>{
    return this.http.get<Jewel>(this.j_url)
  }

  getSingleJewellery(id:any):Observable<Jewel>{
    return this.http.get<Jewel>(this.j_url+ '/' + id)
  }

  getBracelets():Observable<any>{
    return this.http.get<any>(this.b_url)
  }

  getNecklaces():Observable<any>{
    return this.http.get<any>(this.n_url)
  }

  getEarrings():Observable<any>{
    return this.http.get<any>(this.e_url)
   }

   getRings():Observable<any>{
     return this.http.get<any>(this.r_url)
   }

   getSingleEarrings(id:any):Observable<Earring>{
    return this.http.get<Earring>(this.e_url + '/' + id)
   }

   addToWishlist(id:any):Observable<any>{
    return this.http.post<any>(this.w_url, id)
   }

   addToCart(id:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/cart", id)
   }

   getWishlist():Observable<any>{
    return this.http.get<any>(this.w_url)

   }

   getCart():Observable<any>{
    return this.http.get<any>(this.c_url)

   }

   getSingleBracelet(id:any):Observable<Bracelet>{
    return this.http.get<Bracelet>(this.b_url + '/' + id)
   }
   getSingleNecklace(id:any):Observable<any>{
    return this.http.get<any>(this.n_url + '/' + id)
   }
   getSingleRing(id:any):Observable<any>{
    return this.http.get<any>(this.r_url + '/' + id)
   }




}
