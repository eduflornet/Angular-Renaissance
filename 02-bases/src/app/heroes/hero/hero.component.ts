import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 20;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Caguaman';
  }

  changeAge(): void {
    this.age = 39;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 20;
  }






}
