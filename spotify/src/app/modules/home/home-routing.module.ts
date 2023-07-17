import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

   {
     path: 'tracks',
     loadChildren: () => import('@modules/tracks/tracks.module').then(m=> m.TracksModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('@modules/favourites/favourites.module').then(m => m.FavouritesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',//TODO "404" when the route does not exist
    redirectTo: '/tracks'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
