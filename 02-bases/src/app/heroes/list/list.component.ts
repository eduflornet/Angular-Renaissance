import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman',
  'Ironman', 'Hulk', 'Thor', 'Aquaman', 'Superman'];
  public heroDeleted?: string;


  deleteLastHero():void{
    this.heroDeleted = this.heroNames.pop();
  }


}
