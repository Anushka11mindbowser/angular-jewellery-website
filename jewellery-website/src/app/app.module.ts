import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridJewelComponent } from './grid-jewel/grid-jewel.component';
import { JewelleryDetailsComponent } from './jewellery-details/jewellery-details.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { EarringsDetailsComponent } from './earrings-details/earrings-details.component';
import { BraceletsDetailsComponent } from './bracelets-details/bracelets-details.component';
import { NecklaceDetailsComponent } from './necklace-details/necklace-details.component';
import { RingsDetailsComponent } from './rings-details/rings-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GridJewelComponent,
    JewelleryDetailsComponent,
    BraceletsComponent,
    NecklacesComponent,
    EarringsComponent,
    RingsComponent,
    EarringsDetailsComponent,
    BraceletsDetailsComponent,
    NecklaceDetailsComponent,
    RingsDetailsComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
