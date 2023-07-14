import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any> } =
  { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'You library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'world' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create list',
        icon: 'uil-plus-square'
      },
      {
        name: 'Songs you like',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My list º1',
        router: ['/']
      },
      {
        name: 'My list º2',
        router: ['/']
      },
      {
        name: 'My list º3',
        router: ['/']
      },
      {
        name: 'My list º4',
        router: ['/']
      }
    ]

  }


}
