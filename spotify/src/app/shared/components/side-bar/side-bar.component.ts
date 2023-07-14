import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-home'
    },
    {
      name: 'Search',
      icon:'uil-search'
    }
  ];


}
