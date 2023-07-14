import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritePageComponent } from './pages/favourite-page/favourite-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    FavouritePageComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    SharedModule
  ]
})
export class FavouritesModule { }
