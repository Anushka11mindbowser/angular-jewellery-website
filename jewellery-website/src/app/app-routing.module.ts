import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletsDetailsComponent } from './bracelets-details/bracelets-details.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { CartComponent } from './cart/cart.component';
import { EarringsDetailsComponent } from './earrings-details/earrings-details.component';
import { EarringsComponent } from './earrings/earrings.component';
import { GridJewelComponent } from './grid-jewel/grid-jewel.component';
import { JewelleryDetailsComponent } from './jewellery-details/jewellery-details.component';
import { NecklaceDetailsComponent } from './necklace-details/necklace-details.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { RingsDetailsComponent } from './rings-details/rings-details.component';
import { RingsComponent } from './rings/rings.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [{
  path:"singlejewel/:id", component: JewelleryDetailsComponent

},
{
  path:"singleearring/:id", component: EarringsDetailsComponent
},

{
  path:"singlenecklace/:id", component:NecklaceDetailsComponent


},

{
  path:"singlebracelet/:id", component:BraceletsDetailsComponent
},
{
  path:"singlering/:id", component:RingsDetailsComponent
},
{
  path:"home", component:GridJewelComponent
},
{
  path:"bracelets", component:BraceletsComponent
},
{
  path:"necklaces", component:NecklacesComponent
},
{
  path:"earrings", component:EarringsComponent
},
{
  path:"rings", component:RingsComponent
},
{
  path:"wishlist", component:WishlistComponent
},
{
  path:"cart", component:CartComponent
},
{
  path:"checkout", component:CheckoutComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
