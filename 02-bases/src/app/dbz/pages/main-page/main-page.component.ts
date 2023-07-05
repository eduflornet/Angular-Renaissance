import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public characters: Character[] = [
    { name:'Krillin', power: 1000},
    { name:'Goku', power:9500}
  ];

  onDelete(index: number): void {
    console.log('MainPage');
    console.log('index ', index);
    // Use splice() to remove arbitrary item
    this.characters.slice(index, 1);
  }

  onNewCharacter(character:Character): void {
    // add element at the end of the array
    this.characters.push(character);
    console.log('MainPage');
    console.log('onNewCharacter', character);
  }

}
