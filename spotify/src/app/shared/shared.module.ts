import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokerDirective } from './directives/img-broker.directive';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokerDirective
  ],
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokerDirective
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
