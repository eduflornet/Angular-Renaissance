import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

const routes: Routes = [
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },

  {
    path: '',//TODO (Private) 🔴🔴
    component: HomePageComponent, 
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
